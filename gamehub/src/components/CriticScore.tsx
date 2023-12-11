import { Badge } from "@chakra-ui/react";

interface Props {
  score: number;
}

const CriticScore = ({ score }: Props) => {
  let colorScheme = "";
  colorScheme = score > 85 ? "green" : score > 80 ? "blue" : "orange";

  return (
    <Badge colorScheme={colorScheme} paddingX={2}>
      {score}
    </Badge>
  );
};

export default CriticScore;
