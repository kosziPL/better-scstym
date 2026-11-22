export interface SideBarOptionProps {
    name: string;
    icon: string;
    onClick: () => void;
}

export function SideBarOption(props: SideBarOptionProps) {
  return (
    <button class="option" onClick={props.onClick}>
      <img src={props.icon} alt="" />
      <p>{props.name}</p>
    </button>
  )
}