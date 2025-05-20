import job1 from "../Images/ai-prompt-engineer.png";
import job2 from "../Images/blockchain-developer.png";
import job3 from "../Images/data-science-group.png";
import job4 from "../Images/green-energy-engineers.png";
import job5 from "../Images/financial-analysts.png";
import job6 from "../Images/cybersecurity-group.png";
// import hero images 
import hero1 from "../Images/ai-prompt-main-img.png";
import hero2 from "../Images/blockchain-main-img.png";
import hero3 from "../Images/data-sc-main-img.png";
import hero4 from "../Images/green-energy-main-img.png";
import hero5 from "../Images/green-energy-main-img.png";
import hero6 from "../Images/cyber-sec-main-img.png";


const jobs = [
  {
    id: 1,
    title: "Who is an AI Prompt Engineer?",
    image: job1,
    heroImage: hero1,
    paragraphs: [
      "An AI prompt engineer is a professional who designs and optimizes inputs, or 'prompts,' to guide artificial intelligence models in producing accurate, relevant, and creative outputs. In 2025, as AI systems like large language models and generative AI become integral to industries, prompt engineers act as translators between human intent and machine understanding. They craft precise instructions to ensure AI delivers valuable results, whether for content creation, data analysis, or problem-solving in fields like healthcare, marketing, and education.",
      "The role requires a blend of technical expertise and creativity, as prompt engineers must understand AI model architectures while also anticipating how different phrasings affect outputs. They experiment with prompt structures, test variations, and refine inputs to minimize errors and biases, making their work critical for applications like automated customer service, personalized learning platforms, and even virtual reality simulations. In a world driven by AI, prompt engineers are the architects of human-AI collaboration, shaping how machines interpret and respond to complex requests.",
      "Beyond technical skills, AI prompt engineers need strong communication and domain knowledge to tailor prompts for specific industries. For example, in finance, they might design prompts to analyze market trends, while in entertainment, they could guide AI to generate immersive storylines. As AI adoption skyrockets, this profession is in high demand, offering opportunities to innovate and influence the future of technology across global markets.",
    ],
  },
  {
    id: 2,
    title: "Who is a Blockchain Developer?",
    image: job2,
    heroImage: hero2,
    paragraphs: [
      "A blockchain developer builds and maintains decentralized systems that power secure, transparent, and tamper-proof digital transactions. In 2025, blockchain technology underpins cryptocurrencies, supply chain tracking, digital identities, and smart contracts, making developers essential for creating trust in a digital world. They write code for blockchain protocols, design decentralized applications (dApps), and ensure systems are scalable and secure, revolutionizing industries like finance, logistics, and healthcare.",
      "These developers work with complex algorithms and cryptographic techniques to ensure data integrity and privacy. They might create a blockchain for a global supply chain to track goods transparently or develop a decentralized finance (DeFi) platform that eliminates intermediaries. With expertise in languages like Solidity, Rust, or Python, blockchain developers bridge the gap between theoretical cryptography and real-world applications, driving innovation in a rapidly evolving tech landscape.",
      "The demand for blockchain developers is soaring as businesses adopt decentralized solutions to enhance security and efficiency. Beyond coding, they collaborate with stakeholders to design user-friendly interfaces and integrate blockchains with existing systems. In 2025, blockchain developers are at the forefront of redefining trust, enabling peer-to-peer economies, and shaping a future where data is universally verifiable and secure.",
    ],
  },
  {
    id: 3,
    title: "Who is a Data Scientist?",
    image: job3,
    heroImage: hero3,
    paragraphs: [
      "A data scientist is a master of extracting actionable insights from vast datasets, using statistical analysis, machine learning, and programming to solve complex problems. In 2025, data scientists are the backbone of data-driven decision-making, helping organizations in finance, healthcare, retail, and beyond optimize strategies and predict trends. They transform raw data into meaningful patterns, enabling businesses to stay competitive in a fast-paced, tech-driven world.",
      "Their work involves cleaning and processing data, building predictive models, and visualizing results to communicate findings effectively. For instance, a data scientist might analyze customer behavior to boost e-commerce sales or develop algorithms to detect diseases early in medical diagnostics. Proficiency in tools like Python, R, and cloud platforms, combined with a knack for storytelling, allows them to turn numbers into strategies that drive growth and innovation.",
      "In an era where data is dubbed the 'new oil,' data scientists are in high demand, with roles spanning industries and requiring continuous learning to keep up with AI advancements. They collaborate with engineers, marketers, and executives, making their insights pivotal for shaping policies, improving efficiencies, and creating personalized user experiences that define the future of business.",
    ],
  },
  {
    id: 4,
    title: "Who is a Green Energy Engineer?",
    image: job4,
    heroImage: hero4,
    paragraphs: [
      "A green energy engineer designs and implements sustainable energy solutions, such as solar panels, wind turbines, and energy storage systems, to combat climate change and reduce reliance on fossil fuels. In 2025, as the world accelerates toward net-zero emissions, these engineers are critical for developing innovative technologies that power homes, industries, and cities with clean energy. Their work shapes a greener, more resilient future.",
      "These professionals combine expertise in engineering, physics, and environmental science to optimize energy systems for efficiency and scalability. They might design a solar farm that powers thousands of homes or develop hydrogen-based energy storage for grid stability. By leveraging cutting-edge tools like AI for energy forecasting and IoT for system monitoring, green energy engineers ensure renewable solutions are cost-effective and reliable, driving global sustainability efforts.",
      "The role is both technical and visionary, requiring collaboration with policymakers, urban planners, and communities to integrate renewables into everyday life. With governments and corporations investing heavily in clean energy, green energy engineers are in high demand, leading projects that not only protect the planet but also create jobs and foster energy independence for nations worldwide.",
    ],
  },
  {
    id: 5,
    title: "Who is a Financial Analyst?",
    image: job5,
    heroImage: hero5,
    paragraphs: [
      "A financial analyst evaluates market trends, investment opportunities, and economic data to guide businesses and individuals in making informed financial decisions. In 2025, as global markets navigate volatility driven by technology and geopolitical shifts, financial analysts are indispensable for forecasting risks and maximizing returns. They analyze stocks, bonds, cryptocurrencies, and other assets to shape strategies for wealth creation and economic stability.",
      "Their work involves interpreting complex datasets, building financial models, and presenting insights to stakeholders, from corporate boards to individual investors. For example, they might assess the viability of a tech startup’s IPO or advise on portfolio diversification in a turbulent market. Proficiency in tools like Excel, Python, and AI-driven analytics platforms enables them to predict trends with precision, while their understanding of behavioral economics helps them anticipate market psychology.",
      "Financial analysts thrive in a dynamic environment, adapting to innovations like decentralized finance (DeFi) and sustainable investing. Their ability to translate numbers into actionable advice makes them key players in wealth management, corporate finance, and investment banking, driving economic growth and empowering clients to achieve financial goals in an increasingly complex world.",
    ],
  },
  {
    id: 6,
    title: "Who is a Cybersecurity Specialist?",
    image: job6,
    heroImage: hero6,
    paragraphs: [
      "A cybersecurity specialist protects digital systems, networks, and data from cyber threats like hacking, ransomware, and data breaches. In 2025, as businesses and governments rely heavily on cloud computing, IoT, and AI, these specialists are the guardians of the digital world, ensuring privacy and security in an era of escalating cyber risks. They design defenses, monitor threats, and respond swiftly to attacks.",
      "Their role involves deploying firewalls, encryption, and intrusion detection systems while staying ahead of sophisticated cybercriminals. For instance, they might secure a hospital’s patient data or protect a financial institution from phishing scams. With expertise in tools like Kali Linux, Wireshark, and AI-driven threat detection, cybersecurity specialists combine technical prowess with strategic thinking to safeguard critical infrastructure and sensitive information.",
      "The demand for cybersecurity specialists is skyrocketing as cyber threats grow in scale and complexity. They work across industries, from tech startups to government agencies, and play a pivotal role in building trust in digital ecosystems. By preventing data breaches and ensuring compliance with regulations, they enable innovation while protecting the backbone of our connected world.",
    ],
  },
];

export default jobs;