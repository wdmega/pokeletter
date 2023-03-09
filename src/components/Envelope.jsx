import React, { useState } from 'react';
import styles from './Envelope.module.css';
import lapras from '../assets/lapras.png';
import electabuzz from '../assets/electabuzz.png';
import tauros from '../assets/tauros.png';
import ivysaur from '../assets/ivysaur.png';
import charizard from '../assets/charizard.png';
import igglybuff from '../assets/igglybuff.png';
import alakajuan from '../assets/alakajuan.png';

export const Envelope = () => {

  const [isOpen, setIsOpen] = useState(false);

  const pokemons = [
    {
      id: 1,
      src: lapras,
      name: 'Lapras'
    },
    {
      id: 2,
      src: electabuzz,
      name: 'Electabuzz'
    },
    {
      id: 3,
      src: tauros,
      name: 'Tauros'
    },
    {
      id: 4,
      src: ivysaur,
      name: 'Ívysaur'
    },
    {
      id: 5,
      src: charizard,
      name: 'Charizard'
    },
    {
      id: 6,
      src: igglybuff,
      name: 'Igglybuff'
    },
    {
      id: 7,
      src: alakajuan,
      name: 'Alakajuan'
    },
  ]

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.title}>Feliz aniversário</h1>
      </header>
      <main className={styles.main}>
        <div className={styles.left}>
          {
            pokemons.map(({ id, src, name }) => (
              <div key={id}>
                <img
                  src={src}
                  alt={name}
                  className={styles.pokeimage}
                />
                <h1>{name}</h1>
              </div>
            ))
          }
        </div>

        {/* -------------------------------------CENTER-------------------------------- */}
        <div className={styles.center}>
          <div className={styles.gift_container}>
            <div className={styles.gift}></div>
          </div>
          <div className={styles.sub_main}>
            <div className={styles.envelope_area}>
              <div
                className={isOpen ? `${styles.envelope_wrapper}` : `${styles.envelope_wrapper} ${styles.flap}`}>
                <div className={styles.envelope}>
                  <div className={styles.letter}>
                    <div className={styles.text}>
                      <h1>Feliz Aniversário</h1>
                      <p>
                        Parabéns minha querida amiga, por mais um ano de vida que você completa, cada dia mais velha :D, parabéns por continuar crescendo cada ano que passa, mais madura mas sem perder a essencia de uma pessoa especial que você é.
                      </p>
                      <a href='./Pokemon_Fire_Red.sav' download className={styles.download}>
                        Presente extra.
                      </a>
                      <h2>
                        Letícia
                      </h2>
                    </div>
                  </div>
                </div>
                <div onClick={() => setIsOpen(!isOpen)}>
                  <img
                    className={isOpen ? `${styles.lapras}` : `${styles.lapras} ${styles.flap}`}
                    src={lapras}
                    alt="Lapras"
                  />
                </div>
              </div>
            </div >
          </div>
        </div>
        {/* -------------------------------------CENTER-------------------------------- */}
      </main>
    </div>
  )

}

export default Envelope;