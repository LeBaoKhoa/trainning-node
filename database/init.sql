-- Create database
CREATE DATABASE IF NOT EXISTS portfolio_db CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
USE portfolio_db;

-- Table: profile
CREATE TABLE IF NOT EXISTS profile (
    id          INT AUTO_INCREMENT PRIMARY KEY,
    name        VARCHAR(100)  NOT NULL,
    title       VARCHAR(150)  NOT NULL,
    bio         TEXT,
    avatar_url  VARCHAR(255),
    github      VARCHAR(255),
    linkedin    VARCHAR(255),
    email       VARCHAR(100)
);

-- Table: skills
CREATE TABLE IF NOT EXISTS skills (
    id          INT AUTO_INCREMENT PRIMARY KEY,
    name        VARCHAR(100) NOT NULL,
    category    VARCHAR(50)  NOT NULL COMMENT 'Frontend | Backend | Database | Learning | DevOps',
    level       INT          NOT NULL DEFAULT 0 COMMENT '0-100',
    icon        VARCHAR(255)
);

-- Table: experiences
CREATE TABLE IF NOT EXISTS experiences (
    id          INT AUTO_INCREMENT PRIMARY KEY,
    company     VARCHAR(150) NOT NULL,
    position    VARCHAR(150) NOT NULL,
    start_date  DATE,
    end_date    DATE,
    description TEXT,
    sort_order  INT DEFAULT 0
);

-- Table: projects
CREATE TABLE IF NOT EXISTS projects (
    id            INT AUTO_INCREMENT PRIMARY KEY,
    title         VARCHAR(150) NOT NULL,
    description   TEXT,
    tech_stack    VARCHAR(255),
    github_url    VARCHAR(255),
    demo_url      VARCHAR(255),
    thumbnail_url VARCHAR(255),
    sort_order    INT DEFAULT 0
);

-- Table: contacts
CREATE TABLE IF NOT EXISTS contacts (
    id         INT AUTO_INCREMENT PRIMARY KEY,
    name       VARCHAR(100) NOT NULL,
    email      VARCHAR(100) NOT NULL,
    message    TEXT         NOT NULL,
    created_at DATETIME DEFAULT NOW()
);

-- ─────────────────────────────────────────────
-- Sample data
-- ─────────────────────────────────────────────

INSERT INTO profile (name, title, bio, avatar_url, github, linkedin, email) VALUES
(
    'Le Bao Khoa',
    'Full-Stack Developer',
    'Passionate developer who loves building clean, scalable web applications.',
    '/images/avatar.jpg',
    'https://github.com/LeBaoKhoa',
    'https://linkedin.com/in/lebaokhoa',
    'lebaokhoa@example.com'
);

INSERT INTO skills (name, category, level, icon) VALUES
('JavaScript',   'Frontend',  85,  'js.svg'),
('Vue.js',       'Frontend',  80,  'vue.svg'),
('HTML/CSS',     'Frontend',  90,  'html.svg'),
('Node.js',      'Backend',   80,  'node.svg'),
('Express.js',   'Backend',   78,  'express.svg'),
('MySQL',        'Database',  75,  'mysql.svg'),
('Docker',       'DevOps',    55,  'docker.svg'),
('TypeScript',   'Learning',  40,  'ts.svg');

INSERT INTO experiences (company, position, start_date, end_date, description, sort_order) VALUES
(
    'Tech Startup Co.',
    'Junior Backend Developer',
    '2024-01-01', '2024-06-30',
    'Built RESTful APIs with Node.js and MySQL. Improved query performance by 30%%.',
    1
),
(
    'Freelance',
    'Full-Stack Developer',
    '2024-07-01', NULL,
    'Developed portfolio websites and e-commerce solutions for small businesses.',
    2
);

INSERT INTO projects (title, description, tech_stack, github_url, demo_url, thumbnail_url, sort_order) VALUES
(
    'Portfolio Website',
    'A personal portfolio backend built with Node.js/Express and MySQL.',
    'Node.js, Express, MySQL, Vue.js',
    'https://github.com/LeBaoKhoa/trainning-node',
    'https://lebaokhoa.example.com',
    '/images/portfolio.png',
    1
),
(
    'E-Commerce API',
    'RESTful API for an online shop with auth, products, and orders.',
    'Node.js, Express, JWT, MySQL',
    'https://github.com/LeBaoKhoa/ecommerce-api',
    NULL,
    '/images/ecommerce.png',
    2
);
