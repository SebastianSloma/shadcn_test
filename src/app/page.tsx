import React,{useState} from 'react';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';

const page = () => {

	return (
		<div>
			<h1>Button Page</h1>
			<Button variant='ghost'>Click me</Button>
			<Button variant='destructive'>Click me</Button>
			<Calendar
				mode='single'
			
				className='rounded-md border'
			/>
		</div>
	);
};

export default page;
