import { ElementType } from "react";

interface SocialProps {
  platform: string;
  url: string;
  icon: ElementType;
}

const Social: React.FC<SocialProps> = ({ platform, url, icon: Icon }) => {
  return (
    <a href={url} title={platform} target="_blank">
      <Icon className="size-7 text-gray-300 hover:scale-105 trasnsition-all duration-300" />
    </a>
  );
};

export default Social;
