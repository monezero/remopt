import React, { createContext, useContext, useState, ReactNode } from 'react';
import axios from 'axios';

type Pokemon = any;

interface PokemonContextData {
  current: Pokemon | null;
  previous: Pokemon | null;
  next: Pokemon | null;
  loading: boolean;
  fetchPokemon: (id: number) => Promise<void>;
}

const PokemonContext = createContext<PokemonContextData>({} as PokemonContextData);

export const PokemonProvider = ({ children }: { children: ReactNode }) => {
  const [current, setCurrent] = useState<Pokemon | null>(null);
  const [previous, setPrevious] = useState<Pokemon | null>(null);
  const [next, setNext] = useState<Pokemon | null>(null);
  const [loading, setLoading] = useState(false);

  const fetchPokemon = async (id: number) => {
    setLoading(true);
    try {
      const [currentRes, prevRes, nextRes] = await Promise.all([
        axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`),
        id > 1 ? axios.get(`https://pokeapi.co/api/v2/pokemon/${id - 1}`).catch(() => null) : Promise.resolve(null),
        axios.get(`https://pokeapi.co/api/v2/pokemon/${id + 1}`).catch(() => null),
      ]);

      setCurrent(currentRes.data);
      setPrevious(prevRes?.data || null);
      setNext(nextRes?.data || null);
    } catch (error) {
      throw error;
    } finally {
      setLoading(false);
    }
  };

  return (
    <PokemonContext.Provider value={{ current, previous, next, loading, fetchPokemon }}>
      {children}
    </PokemonContext.Provider>
  );
};

export const usePokemon = () => useContext(PokemonContext);
