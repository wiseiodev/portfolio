export const EmailLink = ({ subject }: { subject: string }) => {
  return (
    <a href={encodeURI(`mailto:hi@danwise.dev?subject=${subject}`)}>
      hi@danwise.dev
    </a>
  );
};
