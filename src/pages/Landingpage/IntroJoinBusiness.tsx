import { Button } from "@/components/ui/button";

export default function IntroJoinBusiness() {
	return (
		<div className='w-dvw h-full m-40 flex justify-center items-center space-x-24 p-32'>
			<img src="/img/DummyImage.png" className="size-100 object-cover rounded-2xl"></img>
			<div className="w-1/2 h-full space-y-8">
				<h3 className="text-3xl text-teal-700">For individuals and salons</h3>
				<h2 className="text-6xl">Own a personal business or a side-hustle?</h2>
				<p>Experience all the advantages of a modern beauty platform. Organize your daily work and find new clients. And you can also manage your business in one program and receive and clear reports on your work. </p>
				<Button className="bg-teal-950 h-12">Join now</Button>
			</div>
		</div>
	)
}
