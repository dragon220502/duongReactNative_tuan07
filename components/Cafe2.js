import { useEffect, useState } from 'react'
import {View,Button,Image,TextInput, Text, StyleSheet, TouchableOpacity} from 'react-native'




function Cafe2({navigation}){

    const [data, setData] = useState([])
    useEffect(()=>{
        fetch('https://653f4af99e8bd3be29e02ddb.mockapi.io/ReactNative_Week7')
            .then((response) => response.json())
            .then((json) =>setData(json))
    })
    return(
        <View style = {styles.container}>
            <View style={{flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', paddingTop: 5}}>
                <TouchableOpacity onPress={()=>{navigation.navigate('Cafe1')}}>
                    <Image style={{width: 20, height: 20}} source={require('../assets/back.png')}></Image>
                </TouchableOpacity>
              
                <Text style={{fontSize: 30, fontWeight: 'bold'}}>Shops Near Me</Text>
                <TouchableOpacity>
                    <Image style={{width: 30, height: 30}} source={require('../assets/look.png')}></Image>
                </TouchableOpacity>
               
            </View>
            {data.map((item)=>(
                <View>
                    <TouchableOpacity style ={{alignItems: 'center'}} onPress={()=>{navigation.navigate('Cafe3')}}>
                        <Image source={{uri: item.image}} style={{width: 300, height: 120,}}></Image>
                    </TouchableOpacity>
                    <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                        {item.status == true ? (
                            <Image source={require('../assets/check.png')} style={{width: 20, height: 20,}}></Image>
                        ): (
                            <Image source={require('../assets/lock.png')} style={{width: 20, height: 20,}}></Image>
                        )}
                        {item.status == true ? (
                            <Text style = {{color: '#6fe296', fontSize: 18}}>Accepting Orders</Text>
                        ) : (
                            <Text style = {{color: '#e57b7f', fontSize: 18}}>Tempory Unavailable</Text>
                        )}
                        <View style={{paddingLeft: 10}}>
                            <Image source={require('../assets/clock.png')} style={{width: 20, height: 20,}}></Image>
                        </View>

                        
                        <Text>{item.time}</Text>
                        <Image source={require('../assets/location.png')} style={{width: 20, height: 20,}}></Image>
                        
                    </View>
                    <View style={{paddingLeft: 50}}>
                        <Text style={{fontSize: 18, fontWeight: 'bold'}}>{item.title}</Text>     
                    </View>
                    <View  style={{ paddingLeft: 50, paddingBottom: 5}}>
                        <Text>{item.address}</Text>

                    </View>
                </View>
            ))}
           
        </View>

    )
}

const styles= StyleSheet.create({
    
    
})


export default Cafe2;