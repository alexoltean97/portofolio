import React from "react";

const socialMediaLinks = [
  { name: "GitHub", icon: "fab fa-github", url: "https://github.com" },
  { name: "LinkedIn", icon: "fab fa-linkedin", url: "https://linkedin.com" },
  { name: "Instagram", icon: "fab fa-instagram", url: "https://instagram.com" },
];

const SocialMediaLinks = () => {
  return (
    <div className="social-media">
      <nav>
        <ul>
          {socialMediaLinks.map((link) => (
            <li key={link.name}>
              <a href={link.url} target="_blank" rel="noopener noreferrer">
                <i className={link.icon}></i>
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default SocialMediaLinks;
