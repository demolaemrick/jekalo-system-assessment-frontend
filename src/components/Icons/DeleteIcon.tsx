interface DeleteIconProps {
  clicked: () => void;
}
const DeleteIcon = ({ clicked }: DeleteIconProps) => {
  return (
    <svg
      width="14"
      height="19"
      viewBox="0 0 14 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      onClick={clicked}
    >
      <path
        d="M3.66663 4.75001V3.16668C3.66663 2.74675 3.84222 2.34402 4.15478 2.04709C4.46734 1.75016 4.89127 1.58334 5.33329 1.58334H8.66663C9.10865 1.58334 9.53258 1.75016 9.84514 2.04709C10.1577 2.34402 10.3333 2.74675 10.3333 3.16668V4.75001M12.8333 4.75001V15.8333C12.8333 16.2533 12.6577 16.656 12.3451 16.9529C12.0326 17.2499 11.6087 17.4167 11.1666 17.4167H2.83329C2.39127 17.4167 1.96734 17.2499 1.65478 16.9529C1.34222 16.656 1.16663 16.2533 1.16663 15.8333V4.75001H12.8333Z"
        stroke="#FF2424"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default DeleteIcon;
