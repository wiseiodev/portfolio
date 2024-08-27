import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Mail, MapPin, Phone } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';

export default function ContactPage() {
  return (
    <div className='container mx-auto px-4 py-8'>
      <h1 className='text-3xl font-bold mb-8'>Contact Me</h1>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
        <Card>
          <CardHeader>
            <CardTitle>Send a Message</CardTitle>
            <CardDescription>
              Fill out the form below to get in touch with me.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form className='space-y-4'>
              <div className='space-y-2'>
                <Label htmlFor='name'>Name</Label>
                <Input
                  id='name'
                  placeholder='Your name'
                />
              </div>
              <div className='space-y-2'>
                <Label htmlFor='email'>Email</Label>
                <Input
                  id='email'
                  type='email'
                  placeholder='Your email address'
                />
              </div>
              <div className='space-y-2'>
                <Label htmlFor='message'>Message</Label>
                <Textarea
                  id='message'
                  placeholder='Your message'
                />
              </div>
              <Button
                type='submit'
                className='w-full'>
                Send Message
              </Button>
            </form>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Contact Information</CardTitle>
            <CardDescription>
              You can also reach me through the following channels:
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className='space-y-4'>
              <div className='flex items-center space-x-2'>
                <Mail className='h-5 w-5 text-muted-foreground' />
                <span>daniel@wiseio.dev</span>
              </div>
              <div className='flex items-center space-x-2'>
                <Phone className='h-5 w-5 text-muted-foreground' />
                <span>+1 (503) 597-8290</span>
              </div>
              <div className='flex items-center space-x-2'>
                <MapPin className='h-5 w-5 text-muted-foreground' />
                <span>Portland, OR</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
