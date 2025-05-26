import React, { useEffect, useState } from 'react'
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import SearchSalon from './SearchSalon';
import { CardContent } from '@/components/ui/card';
import { searchApi } from '@/services/authApi';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';


export default function SearchBar() {
    const [search, setSearch] = useState('');
    const [results, setResults] = useState([]);
    const [open, setOpen] = useState(false);
    useEffect(() => {
        const timeout = setTimeout(() => {
            if (search.trim() === '') {
                setResults([]);
                return;
            }

            const searchBar = async () => {
                try {
                    const { status, message, data } = await searchApi(search, sessionStorage.getItem('accessToken'));
                    const combinedArray = [
                        ...data.businesses,
                        ...data.services,
                        ...data.individuals
                    ];
                    setResults(combinedArray);
                    console.log('Search results:', combinedArray);
                } catch (error) {
                    console.error('Error fetching search results:', error);
                    return [];
                }
            }
            searchBar()

        }, 300); // debounce sau 300ms

        return () => clearTimeout(timeout); // clear nếu user tiếp tục gõ
    }, [search]);
    return (
        <>
            <div className="bg-white p-4 rounded-xl md:h-20 w-full h-full">
                <form className="w-full h-full flex justify-center items-center">
                    <div className="w-full h-full flex justify-center items-center md:flex-row flex-col space-y-4 md:space-y-0 md:space-x-4">
                        <div className="w-full h-full flex justify-center items-center space-x-4">
                            <div className="relative h-full w-2/3">
                                <Search className="absolute left-4 top-1/2 -translate-1/2 h-4 w-4 text-muted-foreground" />
                                <Input value={search}
                                    onChange={(e) => {
                                        setOpen(e.target.value.length > 0);
                                        setSearch(e.target.value)
                                    }}
                                    onBlur={() => {
                                        setTimeout(() => setOpen(false), 100000); // delay để chọn item
                                    }}
                                    onFocus={() => {
                                        if (search.length > 0) setOpen(true);
                                    }} placeholder="Search for a salon, individual or service" className="pl-8 w-full h-full" />
                                {open && results.length > 0 && (
                                    <DropdownMenu open={open} onOpenChange={setOpen} >
                                        <DropdownMenuTrigger className="absolute inset-0" />
                                        <DropdownMenuContent className="lg:w-[720px] lg:h-120 md:w-[280px] md:h-80 w-[180px] h-60 overflow-y-auto">
                                            <DropdownMenuLabel>Search Results</DropdownMenuLabel>
                                            {results.map((result, index) => (
                                                <DropdownMenuItem key={index} className="cursor-pointer">
                                                    {result.name || result.title}
                                                </DropdownMenuItem>
                                            ))}
                                            <DropdownMenuSeparator />
                                            <DropdownMenuItem onClick={() => setOpen(false)}>Close</DropdownMenuItem>
                                        </DropdownMenuContent>
                                    </DropdownMenu>
                                )}
                            </div>
                            <div className="lg:h-full lg:w-1/3 h-full ">
                                <SearchSalon />
                            </div>
                        </div>
                        <Button className="md:h-full md:w-1/6 h-full w-full  bg-teal-800" type="submit">Search</Button>
                    </div>
                </form>
            </div>
        </>
    )
}
