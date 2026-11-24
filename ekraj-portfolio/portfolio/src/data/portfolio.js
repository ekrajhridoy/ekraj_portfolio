// EDIT HERE: all site content lives in this file.
export const profile = {
  name: 'Ariful Ekraj Hridoy',
  short: 'Ekraj',
  title: 'Data Science undergraduate',
  tagline: 'Machine learning, multilingual AI and data apps.',
  intro: 'I study Data Science at United International University and build models, dashboards and research benchmarks. My paper on Bengali cultural understanding in vision-language models is accepted at EMNLP 2026 Findings.',
  email: 'ekrajhridoy850@gmail.com',
  phone: '+8801774472186',
  cv: 'cv.pdf', // replace public/cv.pdf to update
}
export const links = {
  GitHub: 'https://github.com/ekrajhridoy',
  LinkedIn: 'https://www.linkedin.com/in/ekrajhridoy/',
  Kaggle: 'https://www.kaggle.com/arifulekrajhridoy',
}
export const allProjects = 'https://github.com/ekrajhridoy?tab=repositories'
export const about = [
  'I am a Data Science undergraduate at United International University with experience in machine learning, data analytics and AI application development.',
  'I contribute to research on multilingual Vision-Language Models and culturally grounded AI benchmarks, and I enjoy turning data into predictive models and interactive analytical systems with Python.',
  'I am most interested in LLMs, multimodal AI and applied machine learning.',
]
export const skills = [
  { group: 'Languages', items: ['Python', 'SQL', 'LaTeX'] },
  { group: 'Data analysis', items: ['Pandas', 'NumPy', 'Matplotlib', 'Seaborn'] },
  { group: 'Machine learning', items: ['Scikit-learn', 'TensorFlow', 'XGBoost', 'Prophet'] },
  { group: 'Apps and dashboards', items: ['Streamlit', 'Plotly', 'HTML', 'CSS'] },
  { group: 'Data collection', items: ['Selenium', 'BeautifulSoup', 'APIs'] },
  { group: 'Tools', items: ['GitHub', 'DVC', 'Ollama'] },
]
export const education = [
  { years: '2024 - 2028', what: 'Bachelor of Data Science', where: 'United International University', note: 'GPA 3.68 / 4.0' },
  { years: '2022', what: 'Higher Secondary Certificate (H.S.C.)', where: '', note: 'GPA 4.42 / 5.0' },
  { years: '2020', what: 'Secondary School Certificate (S.S.C.)', where: '', note: 'GPA 5.0 / 5.0' },
]
export const publication = {
  title: 'Many Dialects, Many Languages, One Cultural Lens: Evaluating Multilingual VLMs for Bengali Culture Understanding Across Historically Linked Languages and Regional Dialects',
  venue: 'EMNLP 2026 Findings (accepted)',
  points: [
    'Introduced BanglaVerse, a benchmark of 1,152 curated images expanded to 32K+ artifacts across 4 languages and 5 Bangla dialects.',
    'Evaluated multilingual VLMs on VQA and image captioning, showing significant performance drops on dialectal, cross-lingual and knowledge-intensive cultural content.',
  ],
  links: { Paper: 'https://arxiv.org/abs/2603.21165', Code: 'https://github.com/Labib1610/BanglaVerseV2', Website: 'https://labib1610.github.io/BanglaVerse/' },
}
// To add a project, copy one block. Leave link/repo as '' to hide the button.
export const projects = [
  { title: 'Stock X', sub: 'AI-powered financial intelligence platform', tech: ['Python', 'Streamlit', 'Scikit-learn', 'TensorFlow', 'XGBoost', 'Ollama'], link: '', repo: '',
    points: ['Full-stack platform with 16+ AI modules: stock direction prediction, LSTM price forecasting, Hidden Markov Model regime detection, crash detection, a reinforcement learning trading agent and portfolio recommendation.', 'Offline Llama-based explanation engine that writes plain-English reasons for model predictions without external APIs.', 'Interactive Plotly dashboard with a fault-tolerant architecture and graceful fallbacks.'] },
  { title: 'Data Dynamo', sub: 'Sales data visualizer tool', tech: ['Streamlit', 'Pandas', 'Prophet', 'Plotly', 'IsolationForest'], link: '', repo: '',
    points: ['Sales analysis app with forecasting built on Pandas and Prophet.', 'Interactive sales and product performance charts, plus ranking of best-selling products.', 'IsolationForest anomaly detection to support resource allocation and fraud detection.'] },
  { title: 'Intelli Club', sub: 'Data Science and AI project for student clubs', tech: ['Python', 'Pandas', 'SQL'], link: '', repo: '',
    points: ['Platform to improve club management and engagement, tracking participation, events and engagement trends.', 'Predictive insights for event planning and resource allocation.', 'Automation workflows for reporting; built in a team.'] },
  { title: 'DesiDataViz', sub: 'Interactive India district data dashboard', tech: ['Streamlit', 'Pandas', 'Plotly Express', 'Mapbox'], link: '', repo: '',
    points: ['District-level map where bubble size and color show two parameters the user picks.', 'Explore population, literacy, GDP and health metrics.', 'Helps spot regional disparities and correlations.'] },
]
export const awards = [
  { what: 'Champion, CSE Project Show', when: 'Summer 2024', by: 'Object-Oriented Programming for Data Science Lab, United International University' },
  { what: 'Champion, Python Wizards (game development competition)', when: '', by: 'IEEE UIU Student Branch, United International University' },
  { what: 'Champion, CSE Project Show', when: 'Summer 2026', by: 'Data Analytics course, United International University' },
]
