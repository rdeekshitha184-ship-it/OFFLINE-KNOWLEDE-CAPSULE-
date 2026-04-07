-- Create categories table
CREATE TABLE public.categories (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  description TEXT,
  icon TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create capsules (articles/content) table
CREATE TABLE public.capsules (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  category_id UUID NOT NULL REFERENCES public.categories(id) ON DELETE CASCADE,
  title TEXT NOT NULL,
  content TEXT NOT NULL,
  tags TEXT[],
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create bookmarks table
CREATE TABLE public.bookmarks (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID NOT NULL,
  capsule_id UUID NOT NULL REFERENCES public.capsules(id) ON DELETE CASCADE,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  UNIQUE(user_id, capsule_id)
);

-- Enable RLS
ALTER TABLE public.categories ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.capsules ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.bookmarks ENABLE ROW LEVEL SECURITY;

-- Categories policies (public read)
CREATE POLICY "Categories are viewable by everyone"
ON public.categories FOR SELECT
USING (true);

-- Capsules policies (public read)
CREATE POLICY "Capsules are viewable by everyone"
ON public.capsules FOR SELECT
USING (true);

-- Bookmarks policies (user-specific)
CREATE POLICY "Users can view their own bookmarks"
ON public.bookmarks FOR SELECT
USING (auth.uid() = user_id);

CREATE POLICY "Users can create their own bookmarks"
ON public.bookmarks FOR INSERT
WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can delete their own bookmarks"
ON public.bookmarks FOR DELETE
USING (auth.uid() = user_id);

-- Create indexes for better performance
CREATE INDEX idx_capsules_category_id ON public.capsules(category_id);
CREATE INDEX idx_capsules_tags ON public.capsules USING GIN(tags);
CREATE INDEX idx_bookmarks_user_id ON public.bookmarks(user_id);
CREATE INDEX idx_bookmarks_capsule_id ON public.bookmarks(capsule_id);

-- Create function to update timestamps
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SET search_path = public;

-- Create trigger for automatic timestamp updates
CREATE TRIGGER update_capsules_updated_at
BEFORE UPDATE ON public.capsules
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();

-- Insert the 6 main categories
INSERT INTO public.categories (name, description, icon) VALUES
('General Knowledge', 'Essential information and facts for everyday life', 'BookOpen'),
('Health and Safety', 'Medical information, safety tips, and wellness guides', 'Heart'),
('Career and Skills', 'Professional development and skill-building resources', 'Briefcase'),
('Fun and Creativity', 'Entertainment, hobbies, and creative pursuits', 'Sparkles'),
('Government and Welfare Schemes', 'Information about government programs and benefits', 'Building'),
('Science and Technology', 'Scientific discoveries and technological advancements', 'FlaskConical');