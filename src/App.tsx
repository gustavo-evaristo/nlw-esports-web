import React, { useEffect, useState } from 'react';
import './styles/main.css';
import Logo from './assets/logo-nlw-esports.svg';
import { GameCard } from './components/GameCard';
import { PublishAdsBanner } from './components/PublishAdsBanner';
import * as Dialog from '@radix-ui/react-dialog';
import { CreateAddModal } from './components/CreateAddModal';
import axios from 'axios';

interface Game {
  id: string;
  title: string;
  banner: string;
  _count: {
    Ads: number;
  };
}

export function App() {
    const [games, setGames] = useState<Game[]>([]);
    const [loading, setLoading] = useState(true);

    async function fetchData () {
        const { data } = await axios.get('http://localhost:3000/games');
        setGames(data);

        setLoading(false);
    }

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <>
            {
                loading 
                    ? 'loading...'
                    :  <div className="max-w-[1200px] mx-auto flex flex-col items-center justify-center my-10">
                        <img src={Logo} alt="" className="w-64" />
                        <h1 className="text-6xl text-white font-black mt-6">
                            Seu <span className="text-transparent bg-nlw-gradient bg-clip-text">duo</span> está aqui.
                        </h1>

                        <div className="grid grid-cols-6 gap-6 mt-16">
                            {games.map(({ title, id, banner, _count }) => (
                                <GameCard key={id} title={title} ads={_count.Ads} banner={banner} />
                            ))}
                        </div>

                        <Dialog.Root>
                            <PublishAdsBanner />

                            <CreateAddModal games={games} />
                        </Dialog.Root>
                    </div> 
            }
        </>
    );
}
