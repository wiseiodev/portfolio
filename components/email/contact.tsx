import {
  Button,
  Column,
  Container,
  Heading,
  Html,
  Row,
  Section,
  Text
} from '@react-email/components';

type ContactEmailProps = {
  name: string;
  email: string;
  message: string;
};

export function ContactEmail({ name, email, message }: ContactEmailProps) {
  return (
    <Container lang='en' dir='ltr'>
      <Heading className='text-xl font-extrabold' as='h2'>
        New Web Page Message
      </Heading>
      <Section className='mt-8'>
        <Row>
          <Column>
            <b>Name:</b> {name}
          </Column>
          <Column>
            <b>Email:</b> {email}
          </Column>
        </Row>
        <Text>{message}</Text>
      </Section>
    </Container>
  );
}
