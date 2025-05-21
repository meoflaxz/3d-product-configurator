import { useGLTF } from '@react-three/drei'
import { useTexture } from '@react-three/drei'
import * as THREE from 'three'

import { useCustomization } from '../contexts/Customization'
const Chair = (props) => {

  const { material, legs, chairColor, cushionColor  } = useCustomization();

  const { nodes, materials } = useGLTF('./models/chair.gltf')

  const leatherTextureProps = useTexture({
    // map:          "./textures/leather/Leather_Padded_001_basecolor.jpg",
    normalMap:    "./textures/leather/Leather_Padded_001_normal.jpg",
    roughnessMap: "./textures/leather/Leather_Padded_001_normal.jpg",
    aoMap:        "./textures/leather/Leather_Padded_001_ambientOcclusion.jpg",
  });

  const fabricTextureProps = useTexture({
    // map:          "./textures/fabric/Fabric_Knitted_004_basecolor.jpg",
    normalMap:    "./textures/fabric/Fabric_Knitted_004_normal.jpg",
    roughnessMap: "./textures/fabric/Fabric_Knitted_004_roughness.jpg",
    aoMap:        "./textures/fabric/Fabric_Knitted_004_ambientOcclusion.jpg",
  });

   // leatherTextureProps.map.repeat.set(3, 3);
  leatherTextureProps.normalMap.repeat.set(3, 3);
  leatherTextureProps.roughnessMap.repeat.set(3, 3);
  leatherTextureProps.aoMap.repeat.set(3, 3);
  // leatherTextureProps.map.wrapS = leatherTextureProps.map.wrapT =
  //   THREE.MirroredRepeatWrapping;
  leatherTextureProps.normalMap.wrapS = leatherTextureProps.normalMap.wrapT =
    THREE.MirroredRepeatWrapping;
  leatherTextureProps.roughnessMap.wrapS =
    leatherTextureProps.roughnessMap.wrapT = THREE.MirroredRepeatWrapping;
  leatherTextureProps.aoMap.wrapS = leatherTextureProps.aoMap.wrapT =
    THREE.RepeatWrapping;

  // fabricTextureProps.map.repeat.set(3, 3);
  fabricTextureProps.normalMap.repeat.set(3, 3);
  fabricTextureProps.roughnessMap.repeat.set(3, 3);
  fabricTextureProps.aoMap.repeat.set(3, 3);
  // fabricTextureProps.map.wrapS = fabricTextureProps.map.wrapT =
  //   THREE.RepeatWrapping;
  fabricTextureProps.normalMap.wrapS = fabricTextureProps.normalMap.wrapT =
    THREE.RepeatWrapping;
  fabricTextureProps.roughnessMap.wrapS =
    fabricTextureProps.roughnessMap.wrapT = THREE.RepeatWrapping;
  fabricTextureProps.aoMap.wrapS = fabricTextureProps.aoMap.wrapT =
    THREE.RepeatWrapping;

  return (
    <group {...props} dispose={null}>
      
      <mesh geometry={nodes.Chair.geometry}>
          <meshStandardMaterial {...material === "leather" ? leatherTextureProps : fabricTextureProps}
          color={chairColor.color}/>
            </mesh>

      <mesh geometry={nodes.Cushion.geometry}>
        <meshStandardMaterial {...fabricTextureProps}
        color={cushionColor.color}/>
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
