// One central place for IDs & asset paths so you never sprinkle literals.
export const GameConfig = {
  player: {
    /** NamedId (or GuidId) registered via IDTag on the player prefab */
    namedId: "Player",

    /** Attribute asset paths under Assets/Resources/ */
    staminaPath: "Assets/Attributes/Current Stamina.asset",
    maxStaminaPath: "Assets/Attributes/Max Stamina.asset",
  },

  // add more presets here (boss, pet, etc.)
} as const;
