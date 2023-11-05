import { useEffect, useState } from 'react'
import {View,Button,Image,TextInput, Text, StyleSheet, TouchableOpacity} from 'react-native'




function Cafe1({navigation}){
    const [data , setData] = useState([])

    useEffect(()=>{
        fetch('https://653f235e9e8bd3be29dffce8.mockapi.io/todos')
            .then((response) => response.json())
            .then((json) => setData(json))
    
    }, []);
    return(
        <View style = {{alignItems: 'center'}}>
            <Text style={{fontSize: 30, fontWeight: 'bold'}}>Welcome to Cafe world</Text>
            {data.map((item)=>(
                <TouchableOpacity style={{paddingTop: 10}}>
                    <Image source={{uri: item.image}} style={{width: 300,height: 170, borderWidth: 1, borderRadius: 20,}}>

                    </Image>
                </TouchableOpacity>
            ))}
            <TouchableOpacity style={{paddingTop: 20}}>
                <Button  title='GET STARTED'  onPress={()=>{navigation.navigate('Cafe2')}} color={'#00bdd6'}></Button>
            </TouchableOpacity>
          
           
        </View>

    )
}

const styles= StyleSheet.create({
    
    
})


export default Cafe1;