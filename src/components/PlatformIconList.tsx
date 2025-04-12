import { Platform } from "../hooks/useGames";
import {
  FaWindows,
  FaPlaystation,
  FaXbox,
  FaApple,
  FaLinux,
  FaAndroid,
} from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { BsGlobe, BsCheck2All } from "react-icons/bs";
import { HStack, Icon } from "@chakra-ui/react";
import { IconType } from "react-icons/lib";
import { SiNintendo, SiAtari, SiSega } from "react-icons/si";
import { MdDoneOutline } from "react-icons/md";
import { IoLogoGameControllerA } from "react-icons/io";
import { GiJoystick } from "react-icons/gi";

interface Props {
  platforms: Platform[];
}

const PlatformIconList = ({ platforms }: Props) => {
  console.log(platforms);

  const iconMap: { [key: string]: IconType } = {
    pc: FaWindows,
    playstation: FaPlaystation,
    xbox: FaXbox,
    ios: MdPhoneIphone,
    android: FaAndroid,
    mac: FaApple,
    linux: FaLinux,
    nintendo: SiNintendo,
    atari: SiAtari,
    "commodore-amiga": BsCheck2All,
    sega: SiSega,
    "3do": IoLogoGameControllerA,
    "neo-geo": GiJoystick,
    web: BsGlobe,
  };
  return (
    <HStack marginY={1} display={"flex"}>
      {platforms.map((platform) => (
        <Icon
          key={platform.id}
          as={iconMap[platform.slug]}
          color="gray.500"
          flexShrink={0.5}
        />
      ))}
    </HStack>
  );
};

export default PlatformIconList;
