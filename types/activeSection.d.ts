export type sectionType = {
  activeSection: activeSectionType;

  setActiveSection: (section: activeSectionType) => void;
};

export type activeSectionType =
  | "Chat"
  | "Past Chat"
  | "Data Sources"
  | "Export"
  | "Bot Settings"
  | "";
