import { Game } from "../hooks/useGames";
import { Card, CardBody, Heading, HStack, Image, Text } from "@chakra-ui/react";
import PlatformIconList from "./PlatformIconList";
import CriticScore from "./CriticScore";
import getCroppedImageUrl from "../services/image-url";
import Emoji from "./Emoji";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card height="100%" minHeight={{ lg: "340px", xl: "300px" }}>
      <Image src={getCroppedImageUrl(game.background_image)} />
      <CardBody>
        <HStack
          display="flex"
          justifyContent="space-between"
          width="100%"
          marginBottom={3}
        >
          {/* Wrapper div ensures PlatformIconList can shrink properly inside HStack */}
          <div
            style={{
              flex: 1,
              minWidth: 0,
            }}
          >
            <PlatformIconList
              platforms={game.parent_platforms.map((p) => p.platform)}
            />
          </div>
          <CriticScore score={game.metacritic} />
        </HStack>
        <Heading fontSize="2xl">
          {game.name}
          <Emoji rating={game.rating_top} />
        </Heading>
      </CardBody>
    </Card>
  );
};

export default GameCard;
