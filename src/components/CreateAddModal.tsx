import axios from 'axios';
import React, { useState } from 'react';
import { GameController } from 'phosphor-react';
import * as Dialog from '@radix-ui/react-dialog';
import * as ToggleGroup from '@radix-ui/react-toggle-group';
import { Input } from './Form/Input';
import { Checkbox } from './Form/Checkbox';
import { Toggle } from './Form/Toggle';
import { WeekDays } from '../utils/weekDays';


interface Game {
    id: string;
    title: string;
}

interface CreateAddModalProps {
    games: Game[]
}

export function CreateAddModal({ games }: CreateAddModalProps) {
    const [weekDays, setWeekDays] = useState<string[]>(['']);
    const [useVoiceChannel, setUseVoiceChannel] = useState(false);

    async function handleCreateAdd (event: React.FormEvent) {
        try {
            event.preventDefault();
    
            const formData = new FormData(event.target as HTMLFormElement);
    
            const { game, name, discord, yearsPlaying, hourStart, hourEnd } = Object.fromEntries(formData);
    
            await axios.post(`http://localhost:3000/games/${game}/ads`, {
                name,
                yearsPlaying: Number(yearsPlaying),
                discord,
                weekDays: weekDays.map(Number),
                hourStart,
                hourEnd,
                useVoiceChannel
            });

            alert('Anúncio criado com sucesso');

            window.location.reload();

        } catch (err) {
            alert('Erro ao criar o anúncio');
            console.log(err);
        }

    }

    return (
        <Dialog.Portal>
            <Dialog.Overlay className="bg-black/60 inset-0 fixed flex items-center justify-center">
                <Dialog.Content className="fixed bg-[#2a2634] py-8 px-10 text-white rounded-lg w-[480px] shadow-lg shadow-black/25">
                    <Dialog.Title className="text-3xl text-white font-black">
            Publique um anúncio
                    </Dialog.Title>

                    <form className="mt-6 flex flex-col gap-4" onSubmit={handleCreateAdd}>
                        <div className="flex flex-col gap-2">
                            <label htmlFor="game" className="font-semibold"> Qual o game ?</label>
                            <select 
                                id="game"
                                name="game"
                                className="bg-zinc-900 py-3 px-4 rounded text-sm placeholder:text-zinc-500 appearance-none" 
                                defaultValue=""   
                            >
                                <option disabled value="">Selecione o game que deseja jogar</option>

                                {games.map(game => (
                                    <option key={game.id} value={game.id}>{game.title}</option>
                                ))}
                            </select>
                        </div> 

                        <div className="flex flex-col gap-2">
                            <label htmlFor="name" className="font-semibold">Seu nome (ou nickname)</label>
                            <Input type="text" id="name" name="name" placeholder="Como te chamam dentro do game?" />
                        </div>

                        <div className="grid grid-cols-2 gap-3">
                            <div className="flex flex-col gap-2">
                                <label htmlFor="yearsPlaying" className="font-semibold">Joga a quantos anos</label>
                                <Input type="number" id="yearsPlaying" placeholder="Tudo bem ser 0" name="yearsPlaying"/>
                            </div>

                            <div className="flex flex-col gap-2">
                                <label htmlFor="discord" className="font-semibold">Qual o seu discord</label>
                                <Input type="text" id="discord" placeholder="Usuario#0000" name="discord"/>
                            </div>
                        </div>

                        <div className="flex gap-6">
                            <div className="flex flex-col gap-2">
                                <label htmlFor="weekDays" className="font-semibold">Quando costuma jogar</label>

                                <ToggleGroup.Root 
                                    className="grid grid-cols-4 gap-2" 
                                    type='multiple' 
                                    onValueChange={setWeekDays}
                                >
                                    {WeekDays.map(({ title, value, day }) => 
                                        <Toggle active={weekDays.includes(value)} key={value} title={title} day={day} value={value}  /> 
                                    )}
                                </ToggleGroup.Root>
                            </div>

                            <div className="flex flex-col gap-2 flex-1">
                                <label htmlFor="hourStart" className="font-semibold">Qual horário do dia</label>
                                <div className="grid grid-cols-2 gap-2">
                                    <Input type="time" id="hourStart" placeholder="De" name="hourStart" />
                                    <Input type="time" id="hourEnd" placeholder="Até" name="hourEnd" />
                                </div>
                            </div>
                        </div>

                        <label className="mt-2 flex items-center gap-2 text-sm">
                            <Checkbox 
                                checked={useVoiceChannel}
                                onCheckedChange={(value) => setUseVoiceChannel(!!value)}
                            />
                            <span>Costumo me conectar ao chat de voz</span>
                        </label>

                        <footer className="mt-4 flex justify-end gap-4">
                            <Dialog.Close className="bg-zinc-500 px-5 h-12 rounded-md font-semibold hover:bg-zinc-600">
                            Cancelar
                            </Dialog.Close>
                            <button
                                type="submit"
                                className="bg-violet-500 px-5 h-12 rounded-md font-semibold flex items-center gap-3 hover:bg-violet-600"
                            >
                                <GameController size={24} />
                                Encontrar duo
                            </button>
                        </footer>
                    </form>
                </Dialog.Content>
            </Dialog.Overlay>
        </Dialog.Portal>
    );
}
