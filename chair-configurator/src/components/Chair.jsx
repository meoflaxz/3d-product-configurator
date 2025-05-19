import { useGLTF } from '@react-three/drei'
import { useTexture } from '@react-three/drei'
import * as THREE from 'three'

import { useCustomization } from '../contexts/Customization'
const Chair = (props) => {

  const { material, legs } = useCustomization();

  const { nodes, materials } = useGLTF('./models/chair.gltf')

  const leatherTextureProps = useTexture({
    map:          "./textures/leather/Leather_Padded_001_basecolor.jpg",
    normalMap:    "./textures/leather/Leather_Padded_001_normal.jpg",
    roughnessMap: "./textures/leather/Leather_Padded_001_normal.jpg",
    aoMap:        "./textures/leather/Leather_Padded_001_ambientOcclusion.jpg",
  });

  leatherTextureProps.map.repeat.set(2,2);
  leatherTextureProps.normalMap.repeat.set(2,2);
  leatherTextureProps.roughnessMap.repeat.set(2,2);
  leatherTextureProps.aoMap.repeat.set(2,2);

  leatherTextureProps.map.wrapS =
  leatherTextureProps.map.wrapT = 
  leatherTextureProps.normalMap.wrapS = 
  leatherTextureProps.normalMap.wrapT = 
  leatherTextureProps.roughnessMap.wrapS =
  leatherTextureProps.roughnessMap.wrapT = 
  leatherTextureProps.aoMap.wrapS =
  leatherTextureProps.aoMap.wrapT = THREE.RepeatWrapping;

  const fabricTextureProps = useTexture({
    map:          "./textures/fabric/Fabric_Knitted_004_basecolor.jpg",
    normalMap:    "./textures/fabric/Fabric_Knitted_004_normal.jpg",
    roughnessMap: "./textures/fabric/Fabric_Knitted_004_roughness.jpg",
    aoMap:        "./textures/fabric/Fabric_Knitted_004_ambientOcclusion.jpg",
  });
  fabricTextureProps.map.repeat.set(2,2);
  fabricTextureProps.normalMap.repeat.set(2,2); 
  fabricTextureProps.roughnessMap.repeat.set(2,2);
  fabricTextureProps.aoMap.repeat.set(2,2);
  fabricTextureProps.map.wrapS =
  fabricTextureProps.map.wrapT =
  fabricTextureProps.normalMap.wrapS =
  fabricTextureProps.normalMap.wrapT =
  fabricTextureProps.roughnessMap.wrapS =
  fabricTextureProps.roughnessMap.wrapT =
  fabricTextureProps.aoMap.wrapS =
  fabricTextureProps.aoMap.wrapT = THREE.RepeatWrapping;

  return (
    <group {...props} dispose={null}>
      
      <mesh geometry={nodes.Chair.geometry}>
          <meshStandardMaterial {...material === "leather" ? leatherTextureProps : fabricTextureProps}/>
            </mesh>

      <mesh geometry={nodes.Cushion.geometry}>
        <meshStandardMaterial {...fabricTextureProps}/>
        position={[0, 0.064, 0.045]}
      </mesh>

      <mesh geometry={nodes.Legs1.geometry}
        material={materials.Legs}
        visible={legs === 1}/>

      <mesh geometry={nodes.Legs2.geometry}
        material={materials.Legs}
        visible={legs === 2} />
    </group>
  )
}

useGLTF.preload('./models/chair.gltf')

export default Chair;
