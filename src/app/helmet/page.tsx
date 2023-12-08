import Image from 'next/image'
import { LoadModel } from "../components/LoadModel";
import styles from '../dashboard/Dashboard.module.css';

export default function cloneHelmet() {
  return (
    <main className={styles.container}>
      <div>
        <h1 className={styles.h1}>Helmet 1</h1>
      </div>
      <div className={styles.text}>
        <h1>Item Description:</h1>
        <h1></h1>
        <p>a meticulously crafted digital representation that showcases 
          intricate details and realism. The model is designed with a high 
          polygon count, ensuring the smoothness and accuracy of its surfaces. 
          It’s textured with high-resolution maps that give it a lifelike 
          appearance, capturing the nuances of the material’s color, roughness, 
          and reflectivity. The model is fully rigged, allowing for realistic 
          movement and animation. It’s compatible with various rendering engines, 
          ensuring that it can be seamlessly integrated into different digital 
          environments. Whether you’re using it for a video game, a virtual reality 
          experience, or a cinematic production, this 3D model is designed to 
          bring your creative vision to life.</p>
      </div>
      <div className={styles.model}>
        <LoadModel fn="/models/helmet/helmet.glb" />
      </div>
    </main>
  )
}