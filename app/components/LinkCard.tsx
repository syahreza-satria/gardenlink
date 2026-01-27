import React, { ElementType } from "react";

interface LinkCardProps {
  title: string;
  url: string;
  icon: ElementType;
}

const LinkCard: React.FC<LinkCardProps> = ({ title, url, icon: Icon }) => {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center p-4 w-full bg-white/10 hover:bg-white/20 border border-white/20 hover:border-white rounded-full transition-all duration-300 transform mb-4 backdrop-blur-sm"
      title={title}
    >
      {Icon && (
        <span className="mr-4 text-2xl text-white group-hover:text-emerald-400 transition-colors">
          <Icon />
        </span>
      )}
      <span className="font-medium text-white text-sm flex-1 text-center pr-8 uppercase ">{title}</span>
    </a>
  );
};

export default LinkCard;
