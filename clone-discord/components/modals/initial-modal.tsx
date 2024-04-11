"use client";

import * as z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod'

import { useForm } from 'react-hook-form';
import { useEffect, useState } from 'react';

import { 
  Dialog,
  DialogHeader,
  DialogTitle,
  DialogContent,
  DialogDescription,
  DialogFooter,
} from '@/components/ui/dialog'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/ui/form';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

import { ModeToggle } from '@/components/mode-toggle';
import FileUpload from '@/components/file-upload';

const formSchema = z.object({
  name: z.string().min(1, {
    message: 'É obrigatório dar um nome para a Guilda.'
  }),
  imageUrl: z.string().min(1, {
    message: 'É obrigatório dar uma imagems para a Guilda.'
  })
});

const InitialModal = () => {
  const [ isMounted, setIsMounted ] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, [])

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      imageUrl: '',
    }
  })

  const isLoading = form.formState.isSubmitting;

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    console.log(values);  
  }

  if (!isMounted) {
    return null;
  }

  return (
    <Dialog open>
      <DialogContent className=' bg-secondary text-foreground p-0 overflow-hidden'>
        <DialogHeader className='pt-8 px-6'>
          <DialogTitle className='text-center text-2xl font-bold'>
            Crie uma Guilda
          </DialogTitle>
          <DialogDescription className='text-center'>
            De uma personalidade a sua Guilda com um nome e imagem. Vode pode sempre mudar isso mais tarde.
          </DialogDescription>
        </DialogHeader>
        <ModeToggle />
        <Form {...form}>
          <form 
          onSubmit={form.handleSubmit(onSubmit)}
          className='space-y-8'>
            <div className='space-y-8 px-6'>
              <div className='flex items-center justify-center text-center'>
                 <FormField 
                 control={form.control}
                 name='imageUrl'
                 render={({field}) => (
                  <FormItem>
                    <FormControl>
                      <FileUpload 
                      endpoint='serverImage'
                      value={field.value}
                      onChange={field.onChange}/>
                    </FormControl>
                  </FormItem>
                 )}/>
              </div>
              <FormField 
              control={form.control}
              name='name'
              render={({field}) => (
                <FormItem>
                  <FormLabel className='uppercase text-xs font-bold'>
                    Nome da Guilda
                  </FormLabel>
                  <FormControl>
                    <Input 
                    disabled={isLoading}
                    className='border-0 focus-visible:ring-0 focus-visible:ring-offset-0'
                    placeholder='Escreva um nome'
                    {...field}/>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}/>
            </div>
            <DialogFooter className='px-6 py-4'>
              <Button 
              disabled={isLoading} 
              className='w-full'>
                Criar
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}

export default InitialModal