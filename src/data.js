export const profile = {
  name: 'Zahida Asha Falia',
  title: 'Kelas XII PPLG 2',
  titleEn: 'Class XII PPLG 2',
  tagline: 'Pengembang Perangkat Lunak & Gim',
  taglineEn: 'Software & Game Development Student',
  phone: '085647076201',
  wa: 'https://wa.me/6285647076201',
  location: 'Indonesia',
  photo: '/images/image.png',
  socials: [
    { name: 'WhatsApp', url: 'https://wa.me/6285647076201', icon: 'whatsapp' },
    { name: 'GitHub', url: 'https://github.com/zahidaashafalia', icon: 'github' },
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/zahida-asha-falia-027480422/', icon: 'linkedin' },
    { name: 'Instagram', url: 'https://www.instagram.com/ashafally?igsh=cjRrZXF0b3djeDJn', icon: 'instagram' },
  ],
}

export const bio = {
  id: 'Saya adalah siswi yang memiliki minat di bidang Web Development, UI/UX Design, dan Artificial Intelligence (AI). Saya senang mempelajari teknologi baru, membangun website yang responsif dan mudah digunakan, serta terus mengembangkan kemampuan melalui project pribadi maupun akademik.',
  en: 'I am a student with a strong interest in Web Development, UI/UX Design, and Artificial Intelligence (AI). I enjoy learning new technologies, building responsive and user-friendly websites, and continuously improving my skills through personal and academic projects.',
}

export const aboutSections = {
  technicalSkills: {
    id: 'Technical Skills',
    en: 'Technical Skills',
    items: ['HTML', 'CSS', 'JavaScript', 'PHP', 'Laravel', 'Bootstrap', 'MySQL'],
  },
  tools: {
    id: 'Tools & Teknologi',
    en: 'Tools & Technologies',
    items: ['Visual Studio Code', 'Figma', 'Git & GitHub', 'Postman', 'XAMPP', 'Laragon'],
  },
  learned: {
    id: 'Yang Telah Dipelajari',
    en: "What I've Learned",
    items: ['Flutter (Dasar)', 'MongoDB (Dasar)', 'Arduino & Ubidots (Dasar)', 'UI/UX Design', 'Responsive Web Design', 'CRUD Application', 'REST API (Dasar)', 'Database Systems', 'SDLC'],
  },
  interests: {
    id: 'Minat',
    en: 'Interests',
    items: ['Web Development', 'UI/UX Design', 'Artificial Intelligence (AI)', 'Database Systems', 'Teknologi Baru'],
  },
  hobbies: {
    id: 'Hobi',
    en: 'Hobbies',
    items: ['Mendengarkan Musik', 'Nonton Film', 'Browsing Inspirasi Desain', 'Menjelajahi Hal Baru'],
  },
  softSkills: {
    id: 'Soft Skills',
    en: 'Soft Skills',
    items: ['Problem Solving', 'Teamwork', 'Communication', 'Time Management', 'Adaptability', 'Fast Learner', 'Attention to Detail'],
  },
}

export const skills = [
  { name: 'Figma', level: 90, category: 'Design' },
  { name: 'HTML5', level: 95, category: 'Frontend' },
  { name: 'CSS3', level: 90, category: 'Frontend' },
  { name: 'JavaScript', level: 75, category: 'Frontend' },
  { name: 'PHP', level: 85, category: 'Backend' },
  { name: 'Laravel', level: 85, category: 'Backend' },
  { name: 'MySQL', level: 85, category: 'Database' },
  { name: 'Tailwind CSS', level: 88, category: 'Frontend' },
  { name: 'Bootstrap', level: 85, category: 'Frontend' },
  { name: 'Git & GitHub', level: 80, category: 'Tools' },
  { name: 'UI/UX Design', level: 88, category: 'Design' },
  { name: 'System Analysis', level: 82, category: 'Analysis' },
  { name: 'Postman', level: 75, category: 'API' },
  { name: 'REST API', level: 72, category: 'API' },
]

export const projects = [
  {
    title: 'Website Jadwal Pelajaran Dinamis',
    titleEn: 'Dynamic Class Schedule Website',
    description: 'Website dinamis untuk menampilkan dan mengelola jadwal pelajaran secara real-time.',
    descriptionEn: 'Dynamic website to display and manage class schedules in real-time.',
    category: 'Web Developer',
    tags: ['PHP', 'Laravel', 'MySQL'],
    color: 'from-primary-500 to-pink-500',
  },
  {
    title: 'Website Toko Online',
    titleEn: 'Online Store Website',
    description: 'Platform e-commerce dengan fitur keranjang, katalog produk, dan checkout.',
    descriptionEn: 'E-commerce platform with cart, product catalog, and checkout features.',
    category: 'Web Developer',
    tags: ['Laravel', 'MySQL', 'Tailwind'],
    color: 'from-pink-500 to-primary-400',
  },
  {
    title: 'Website Texcer Hot',
    titleEn: 'Texcer Hot Website',
    description: 'Website untuk layanan Texcer Hot dengan dashboard manajemen data.',
    descriptionEn: 'Website for Texcer Hot service with data management dashboard.',
    category: 'Web Developer',
    tags: ['Laravel', 'MySQL', 'Bootstrap'],
    color: 'from-primary-400 to-pink-400',
  },
  {
    title: 'Website SDN 6 Bangsri',
    titleEn: 'SDN 6 Bangsri Website',
    description: 'Website profil sekolah dengan informasi akademik dan berita.',
    descriptionEn: 'School profile website with academic information and news.',
    category: 'Web Design',
    tags: ['HTML', 'CSS', 'JavaScript'],
    color: 'from-primary-600 to-pink-600',
  },
  {
    title: 'Dashboard Honor of Kings',
    titleEn: 'Honor of Kings Dashboard',
    description: 'Dashboard statistik pemain untuk game Honor of Kings.',
    descriptionEn: 'Player statistics dashboard for Honor of Kings game.',
    category: 'Web Design',
    tags: ['Figma', 'UI/UX', 'Dashboard'],
    color: 'from-pink-600 to-primary-500',
  },
  {
    title: 'Dashboard Finance',
    titleEn: 'Finance Dashboard',
    description: 'Dashboard keuangan dengan visualisasi data dan laporan.',
    descriptionEn: 'Finance dashboard with data visualization and reports.',
    category: 'Web Design',
    tags: ['Figma', 'UI/UX', 'Data Viz'],
    color: 'from-primary-500 to-pink-500',
  },
  {
    title: 'Dashboard Texcer Hot',
    titleEn: 'Texcer Hot Dashboard',
    description: 'Dashboard admin untuk manajemen data Texcer Hot.',
    descriptionEn: 'Admin dashboard for Texcer Hot data management.',
    category: 'Web Design',
    tags: ['Figma', 'UI/UX', 'Admin'],
    color: 'from-pink-400 to-primary-600',
  },
]

export const experience = [
  {
    type: 'Ekstrakurikuler',
    typeEn: 'Extracurricular',
    title: 'Web Development Club',
    period: 'Aktif',
    periodEn: 'Active',
    description: 'Anggota club web development, mendalami praktik pengembangan website modern dan kolaborasi proyek.',
    descriptionEn: 'Member of the web development club, deepening skills in modern website development and project collaboration.',
  },
  {
    type: 'Pendidikan',
    typeEn: 'Education',
    title: 'Jurusan PPLG (Pengembangan Perangkat Lunak dan Gim)',
    period: 'Kelas XII',
    periodEn: 'Class XII',
    description: 'Mempelajari analisis sistem, UI/UX design, front-end & back-end development, database, API, version control, serta soft skills.',
    descriptionEn: 'Studying system analysis, UI/UX design, front-end & back-end development, database, API, version control, and soft skills.',
  },
]

export const competencies = [
  {
    title: 'Analisis & Perancangan Sistem',
    titleEn: 'System Analysis & Design',
    items: ['Requirement Analysis', 'Perancangan Sistem Informasi', 'Flowchart & Algoritma', 'Agile & Scrum', 'Dokumentasi Proyek'],
    icon: 'analysis',
  },
  {
    title: 'UI/UX Design',
    titleEn: 'UI/UX Design',
    items: ['Figma', 'Wireframe & Prototype', 'User Interface Design', 'User Experience Design', 'Responsive Design'],
    icon: 'design',
  },
  {
    title: 'Front-End Development',
    titleEn: 'Front-End Development',
    items: ['HTML5', 'CSS3', 'JavaScript', 'Bootstrap', 'Tailwind CSS', 'Responsive Web Design'],
    icon: 'frontend',
  },
  {
    title: 'Back-End Development',
    titleEn: 'Back-End Development',
    items: ['PHP', 'Laravel Framework', 'MVC', 'Routing & Controller', 'Blade Template', 'CRUD', 'Authentication', 'Session Management'],
    icon: 'backend',
  },
  {
    title: 'Database',
    titleEn: 'Database',
    items: ['MySQL', 'SQL', 'phpMyAdmin', 'Relasi Database', 'Normalisasi', 'Migration & Seeder', 'Eloquent ORM'],
    icon: 'database',
  },
  {
    title: 'API & Version Control',
    titleEn: 'API & Version Control',
    items: ['REST API', 'Postman', 'Integrasi Data', 'Git', 'GitHub', 'Branching', 'Push/Pull/Commit/Merge'],
    icon: 'api',
  },
  {
    title: 'Soft Skills',
    titleEn: 'Soft Skills',
    items: ['Problem Solving', 'Critical Thinking', 'Teamwork', 'Communication', 'Time Management', 'Adaptability', 'Fast Learner'],
    icon: 'soft',
  },
  {
    title: 'Sedang Dipelajari',
    titleEn: 'Currently Learning',
    items: ['Flutter', 'MongoDB', 'Arduino & Ubidots', 'UI/UX Modern', 'Integrasi AI', 'Firebase', 'Cloud Computing Dasar'],
    icon: 'learning',
  },
]

export const techStack = [
  'HTML', 'CSS', 'JavaScript', 'PHP', 'Laravel', 'MySQL',
  'Bootstrap', 'Tailwind CSS', 'Git', 'GitHub', 'Figma',
  'XAMPP', 'Laragon', 'npm', 'Vite', 'Postman', 'VS Code',
  'Flutter', 'MongoDB', 'Arduino',
]
