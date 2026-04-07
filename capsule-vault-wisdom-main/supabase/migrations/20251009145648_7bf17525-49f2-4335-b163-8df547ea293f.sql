-- Delete duplicate and similar capsules
DELETE FROM capsules WHERE id IN (
  '79f7027f-d32b-451d-a650-b6cc4f748ee3',  -- 5G duplicate
  'eb143f2a-f245-4b53-8a24-22a498e16307',  -- AI Applications duplicate
  '83bed53a-7a8b-4ddd-b0a9-c0ba6f563582',  -- Ayushman duplicate
  '1cb4aad8-7841-4661-9e0a-a976ec18c358',  -- Music duplicate
  '05f9f7f2-7572-4345-ac41-163dac4e7364',  -- Exercise duplicate
  '3a93209f-a399-4ce6-aba1-646255310aba',  -- Network duplicate
  'c18ee768-4ec9-4af8-8179-a0585d6fbcd1',  -- Writing duplicate
  'bbb27dfb-4f84-421d-a7ce-0de4029020ee',  -- Resume Writing (similar topic)
  '68f1a420-38f9-413c-9475-7a04ecc732a3',  -- Time Management duplicate
  'ceab6658-9269-4673-ace6-9309e38ff991',  -- Time Management Strategies (similar)
  'efbaf1fd-a0de-4d40-a275-69110371a76f',  -- Resume Best Practices duplicate
  '71b0b649-e025-4aac-b02b-fc817517f508',  -- Brain duplicate
  '0b60c66c-f1cf-4491-9f4e-6e855d05784f',  -- Hydration duplicate
  '3541fd66-ce9e-4bf0-903a-89be7427a64e',  -- Painting duplicate
  'c81047b5-8cd7-4b21-98f8-03f308cc8e3c',  -- PM Kisan duplicate
  '355db07e-01d5-4d77-9fb5-f6d25811b6f0',  -- Awas Yojana duplicate
  '0db81906-5b61-4933-93c4-40052a9e4c60',  -- Quantum duplicate
  '3c807f62-c587-4429-a4c2-92c139377943',  -- Sleep duplicate
  '58ba13ae-9e8d-40f2-b6a3-c9284fa8ae9c',  -- Solar System duplicate
  'd2de972d-cb48-4c4e-a242-5b1d4d34c1c0'   -- Rivers duplicate
);

-- Add new diverse topics for Career and Skills
INSERT INTO capsules (category_id, title, content, tags) VALUES
('42302d33-b614-4ac4-a255-5e44f16d9bc0', 'Negotiation Skills for Success', 'Learn effective negotiation techniques including preparation strategies, active listening, finding win-win solutions, understanding body language, and building long-term relationships through fair deals.', ARRAY['negotiation', 'communication', 'career']),
('42302d33-b614-4ac4-a255-5e44f16d9bc0', 'Leadership Development Fundamentals', 'Discover key leadership qualities including emotional intelligence, decision-making skills, delegation techniques, team motivation, and leading by example to inspire others.', ARRAY['leadership', 'management', 'skills']),
('42302d33-b614-4ac4-a255-5e44f16d9bc0', 'Freelancing: Getting Started Guide', 'Essential guide to starting a freelance career covering platform selection, portfolio building, pricing strategies, client communication, and managing finances as a freelancer.', ARRAY['freelancing', 'entrepreneurship', 'career']),
('42302d33-b614-4ac4-a255-5e44f16d9bc0', 'Critical Thinking Skills', 'Develop analytical abilities through logical reasoning, evaluating evidence, identifying biases, problem decomposition, and making informed decisions in professional settings.', ARRAY['thinking', 'analysis', 'skills']);

-- Add new diverse topics for Fun and Creativity
INSERT INTO capsules (category_id, title, content, tags) VALUES
('f062739c-8528-4ca9-8fb6-e4d66825fcf9', 'Origami Art for Beginners', 'Discover the ancient art of paper folding with step-by-step instructions for basic shapes, understanding crease patterns, and progressing to intermediate designs like cranes and flowers.', ARRAY['origami', 'craft', 'art']),
('f062739c-8528-4ca9-8fb6-e4d66825fcf9', 'Podcasting Basics', 'Learn how to start your own podcast including equipment selection, audio editing software, content planning, recording techniques, and publishing to popular platforms.', ARRAY['podcast', 'audio', 'media']),
('f062739c-8528-4ca9-8fb6-e4d66825fcf9', 'Chess Strategy Fundamentals', 'Master essential chess concepts including opening principles, tactical patterns, positional play, endgame techniques, and developing strategic thinking through the game.', ARRAY['chess', 'strategy', 'game']),
('f062739c-8528-4ca9-8fb6-e4d66825fcf9', 'Dance Styles Around the World', 'Explore diverse dance traditions from ballet and salsa to Bharatanatyam and hip-hop, understanding cultural significance, basic moves, and health benefits of dance.', ARRAY['dance', 'culture', 'fitness']);

-- Add new diverse topics for General Knowledge
INSERT INTO capsules (category_id, title, content, tags) VALUES
('b2ead67f-cf26-47d6-a84f-39ad3f8ea857', 'World Heritage Sites to Know', 'Explore UNESCO World Heritage Sites including the Great Wall of China, Machu Picchu, Taj Mahal, and pyramids of Egypt with their historical significance and cultural importance.', ARRAY['heritage', 'history', 'culture']),
('b2ead67f-cf26-47d6-a84f-39ad3f8ea857', 'Major Ocean Currents Explained', 'Understanding global ocean circulation including the Gulf Stream, Kuroshio Current, and their impact on climate, marine life, and navigation throughout history.', ARRAY['ocean', 'geography', 'climate']),
('b2ead67f-cf26-47d6-a84f-39ad3f8ea857', 'Ancient Civilizations Overview', 'Journey through major ancient civilizations including Mesopotamia, Indus Valley, Ancient Egypt, Greece, and Rome with their contributions to modern society.', ARRAY['history', 'civilization', 'culture']),
('b2ead67f-cf26-47d6-a84f-39ad3f8ea857', 'The Metric System Explained', 'Complete guide to the International System of Units covering length, mass, volume, temperature, and easy conversion methods for everyday use.', ARRAY['metric', 'measurement', 'science']);

-- Add new diverse topics for Government and Welfare Schemes
INSERT INTO capsules (category_id, title, content, tags) VALUES
('3523748c-47fb-4dfa-9055-de43fd674c85', 'Digital India Initiative', 'Understanding Digital India program objectives including digital infrastructure, digital literacy, digital services delivery, and how citizens can benefit from e-governance.', ARRAY['digital', 'governance', 'technology']),
('3523748c-47fb-4dfa-9055-de43fd674c85', 'Women Empowerment Schemes', 'Comprehensive guide to government programs supporting women including Beti Bachao Beti Padhao, STEP, and schemes for women entrepreneurs and skill development.', ARRAY['women', 'empowerment', 'welfare']),
('3523748c-47fb-4dfa-9055-de43fd674c85', 'Senior Citizen Benefits', 'Complete information on schemes for elderly citizens including pension programs, healthcare benefits, tax exemptions, and special services available.', ARRAY['senior', 'pension', 'benefits']),
('3523748c-47fb-4dfa-9055-de43fd674c85', 'Education Scholarships Guide', 'Overview of scholarship opportunities from central and state governments for various educational levels, eligibility criteria, and application processes.', ARRAY['education', 'scholarship', 'students']);

-- Add new diverse topics for Health and Safety
INSERT INTO capsules (category_id, title, content, tags) VALUES
('6969897a-3ebb-4e3d-aa4e-d6f0c9b5d7de', 'Mental Health Awareness', 'Understanding mental wellness including recognizing stress, anxiety, and depression signs, coping strategies, the importance of seeking help, and reducing stigma.', ARRAY['mental health', 'wellness', 'awareness']),
('6969897a-3ebb-4e3d-aa4e-d6f0c9b5d7de', 'Yoga for Daily Life', 'Introduction to yoga practice covering basic asanas, breathing techniques (pranayama), meditation, and how yoga benefits physical and mental health.', ARRAY['yoga', 'exercise', 'wellness']),
('6969897a-3ebb-4e3d-aa4e-d6f0c9b5d7de', 'Food Safety and Hygiene', 'Essential food handling practices including proper storage, cooking temperatures, preventing cross-contamination, and understanding expiration dates to avoid foodborne illness.', ARRAY['food', 'safety', 'hygiene']),
('6969897a-3ebb-4e3d-aa4e-d6f0c9b5d7de', 'Ergonomics at Workplace', 'Learn proper workstation setup, correct posture, screen positioning, taking breaks, and exercises to prevent repetitive strain injuries and back pain.', ARRAY['ergonomics', 'workplace', 'health']);

-- Add new diverse topics for Science and Technology
INSERT INTO capsules (category_id, title, content, tags) VALUES
('e0c9a8ef-0370-43e6-a15d-eec229478168', 'Blockchain Technology Explained', 'Understanding blockchain fundamentals including distributed ledger technology, cryptocurrency basics, smart contracts, and real-world applications beyond finance.', ARRAY['blockchain', 'cryptocurrency', 'technology']),
('e0c9a8ef-0370-43e6-a15d-eec229478168', 'Space Exploration Milestones', 'Journey through space exploration from Sputnik and Apollo missions to Mars rovers and James Webb Space Telescope, including future missions to Moon and Mars.', ARRAY['space', 'exploration', 'science']),
('e0c9a8ef-0370-43e6-a15d-eec229478168', 'Cybersecurity Basics', 'Essential online safety practices including strong passwords, two-factor authentication, recognizing phishing attempts, safe browsing habits, and protecting personal data.', ARRAY['security', 'internet', 'safety']),
('e0c9a8ef-0370-43e6-a15d-eec229478168', 'Gene Editing and CRISPR', 'Introduction to genetic engineering technology, CRISPR-Cas9 system, potential medical applications, ethical considerations, and the future of genetic modification.', ARRAY['genetics', 'biotechnology', 'science']);