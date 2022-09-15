import React, { useEffect, useState } from 'react';
import './styles/main.css';
import Logo from './assets/logo-nlw-esports.svg';
import { GameCard } from './components/GameCard';
import { PublishAdsBanner } from './components/PublishAdsBanner';
import * as Dialog from '@radix-ui/react-dialog';
import { GameController } from 'phosphor-react';
import { Input } from './components/Form/Input';

interface Game {
    id: string;
    title: string;
    banner: string;
    _count: {
        Ads: number
    }
}

export function App() {

    const [games, setGames] = useState<Game[]>([]);

    useEffect(() => {
        fetch('http://localhost:3000/games')
            .then(response => response.json())
            .then((data) => setGames(data));
    }, []);

    return (
        <div className="max-w-[1200px] mx-auto flex flex-col items-center justify-center my-10">
            <img src={Logo} alt="" className="w-64"/>
            <h1 className="text-6xl text-white font-black mt-6">Seu <span className="text-transparent bg-nlw-gradient bg-clip-text">duo</span> está aqui.</h1>

            <div className="grid grid-cols-6 gap-6 mt-16">
                {games.map(({ title, id, banner, _count }) => (
                    <GameCard key={id} title={title} ads={_count.Ads} banner={banner} />
                )) }
            </div>

            <Dialog.Root>
                <PublishAdsBanner />

                <Dialog.Portal>
                    <Dialog.Overlay className='bg-black/60 inset-0 fixed flex items-center justify-center'>
                        <Dialog.Content className="fixed bg-[#2a2634] py-8 px-10 text-white rounded-lg w-[480px] shadow-lg shadow-black/25">
                            <Dialog.Title className="text-3xl text-white font-black">Publique um anúncio</Dialog.Title>

                            <form className="mt-6 flex flex-col gap-4">
                                <div className='flex flex-col gap-2'>
                                    <label htmlFor="game" className='font-semibold'>Qual o game ?</label>
                                    <Input 
                                        type="text" 
                                        id='game' 
                                        placeholder='Selecione o game que deseja jogar' 
                                    />
                                </div>

                                <div className='flex flex-col gap-2'>
                                    <label htmlFor="name">Seu nome (ou nickname)</label>
                                    <Input type="text" id='name' placeholder='Como te chamam dentro do game?' />
                                </div>

                                <div className="grid grid-cols-2 gap-3">
                                    <div className='flex flex-col gap-2'>
                                        <label htmlFor="yearsPlaying">Joga a quantos anos</label>
                                        <Input type="number" id='yearsPlaying' placeholder='Tudo bem ser 0' />
                                    </div>

                                    <div className='flex flex-col gap-2'>
                                        <label htmlFor="discord">Qual o seu discord</label>
                                        <Input type="text" id='discord' placeholder='Usuario#0000' />
                                    </div>
                                </div>

                                <div className='flex gap-6'>
                                    <div className='flex flex-col gap-2'>
                                        <label htmlFor="weekDays">Quando costuma jogar</label>

                                        <div className="grid grid-cols-4 gap-2">
                                            <button
                                                type="button" 
                                                title="Domingo" 
                                                className='w-8 h-8 rounded bg-zinc-900'
                                            >
                                                D
                                            </button>
                                            <button
                                                type="button" 
                                                title="Segunds" 
                                                className='w-8 h-8 rounded bg-zinc-900'
                                            >
                                                S
                                            </button>
                                            <button
                                                type="button" 
                                                title="Terça" 
                                                className='w-8 h-8 rounded bg-zinc-900'
                                            >
                                                T
                                            </button>
                                            <button
                                                type="button" 
                                                title="Quarta" 
                                                className='w-8 h-8 rounded bg-zinc-900'
                                            >
                                                Q
                                            </button>
                                            <button
                                                type="button" 
                                                title="Quinta" 
                                                className='w-8 h-8 rounded bg-zinc-900'
                                            >
                                                Q
                                            </button>
                                            <button
                                                type="button" 
                                                title="Sexta" 
                                                className='w-8 h-8 rounded bg-zinc-900'
                                            >
                                                S
                                            </button>
                                            <button
                                                type="button" 
                                                title="Sábado" 
                                                className='w-8 h-8 rounded bg-zinc-900'
                                            >
                                                S
                                            </button>
                                        </div>
                                    </div>

                                    <div className='flex flex-col gap-2 flex-1'>
                                        <label htmlFor="hourStart">Qual horário do dia</label>
                                        <div className='grid grid-cols-2 gap-2'>
                                            <Input type="time" id='hourStart' placeholder='De' />
                                            <Input type="time" id='hourEnd' placeholder='Até' />
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-2 flex items-center gap-2 text-sm">
                                    <input type="checkbox" name="" id="" />
                                    <span>Costumo me conectar ao chat de voz</span>
                                </div>
                                    
                                <footer className="mt-4 flex justify-end gap-4">
                                    <Dialog.Close className="bg-zinc-500 px-5 h-12 rounded-md font-semibold hover:bg-zinc-600">Cancelar</Dialog.Close>
                                    <button type="button" className="bg-violet-500 px-5 h-12 rounded-md font-semibold flex items-center gap-3 hover:bg-violet-600">
                                        <GameController size={24} />
                                            Encontrar duo
                                    </button>
                                </footer>
                            </form>
                        </Dialog.Content>
                    </Dialog.Overlay>
                </Dialog.Portal>
            </Dialog.Root>

        </div>
    );
}