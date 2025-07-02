import { h } from "preact";
import { useObjectByName } from "@/hooks/useObject";
import { GameConfig } from "@/config/gameObjects";
import { RadialGauge } from "@/ui/RadialGauge";
import { useAttributeValue } from "@/hooks/useAttributeValue";

/** Props let designers override defaults from GameConfig if needed */
interface Props {
  objectName?: string; // NamedId in IDTag
  stamPath?: string; // Resources path for current value
  maxStamPath?: string; // Resources path for max value
  size?: number;
  tickInterval?: number;
}

export const StaminaMeter = ({
  objectName = GameConfig.player.namedId,
  stamPath = GameConfig.player.staminaPath,
  maxStamPath = GameConfig.player.maxStaminaPath,
  size = 140,
  tickInterval = 20,
}: Readonly<Props>) => {
  const actor = useObjectByName(objectName);
  const current = useAttributeValue(actor, stamPath, 0);
  const max = useAttributeValue(actor, maxStamPath, 1);
  return (
    <RadialGauge
      current={current}
      max={max}
      tickInterval={tickInterval}
      size={size}
    />
  );
};
