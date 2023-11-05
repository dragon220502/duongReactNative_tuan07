import {View,Button,Image,TextInput, Text, StyleSheet, TouchableOpacity} from 'react-native'
import { useEffect, useState } from 'react'



function Cafe3({navigation}){
    const [data, setData] = useState([])
    const [count, setCount] = useState(0);
    const handleAdd = () => {
        setCount((prevCount) => prevCount + 1);
       
    };
    const handleDelete = () => {
        if (count > 0) {
            setCount((prevCount) => prevCount - 1);
        } else {
            setCount((prevCount) => (prevCount = 0));
            alert('Số lượng không hợp lệ')
        }
    };
    useEffect(()=>{
        fetch('https://6540a7f045bedb25bfc245f4.mockapi.io/Cafe3')
            .then((response) => response.json())
            .then((json) =>setData(json))
    })
    return(
        <View style = {styles.container}>
           <View style={{flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', paddingTop: 5}}>
            <TouchableOpacity onPress={()=>{navigation.navigate('Cafe2')}}>
                    <Image style={{width: 20, height: 20}} source={require('../assets/back.png')}></Image>
                </TouchableOpacity>
                
                <Text style={{fontSize: 30, fontWeight: 'bold'}}>Drinks</Text>
                <TouchableOpacity>
                    <Image style={{width: 30, height: 30}} source={require('../assets/look.png')}></Image>
                </TouchableOpacity>
            </View>
            {data.map((item)=> (
                <View style={{paddingTop: 10}}> 
                    <View style={{flexDirection: 'row', paddingLeft: 30, borderWidth: 0.5, borderColor: '#C4C4C4', borderRadius: 10, marginHorizontal: 20, justifyContent: 'space-between'}}>
                        <View style={{}}>
                            
                            <Image style={{width: 65, height: 65,}} source={{uri: item.image}}></Image>
                        </View>
                       

                        
                        <View style={{flexDirection: 'row', justifyContent: 'space-around' }}>
                            <View>
                                <Text style={{fontSize: 18, fontWeight: 'bold'}}>{item.title}</Text>
                            </View>
                            <View style={{}}>
                                <Text style={{fontSize: 17, color: '#C4C4C4' }}>${item.price}</Text>
                            </View>
                           
                            
                           
                            
                           
                           
                           
                        </View>
                        <View style={{flexDirection: 'row',justifyContent: 'flex-end', alignItems: 'flex-end', justifyContent: 'flex-end' }}>
                                <TouchableOpacity onPress={handleDelete} style={{}}>
                                    <Image style={{width: 20, height: 20}} source={{uri: item.delete}}></Image>
                                </TouchableOpacity>
                               
                               <View style={{paddingHorizontal: 5}}>
                                    <Text>{count}</Text>
                               </View>
                                
                                
                                
                                <TouchableOpacity onPress={handleAdd}>
                                    <Image style={{width: 20, height: 20}} source={{uri: item.add}}></Image>
                                </TouchableOpacity>
                                
                            </View>



                       
                    </View>


                </View>
            ))}
            <View style={{marginHorizontal: 20, paddingTop: 20}}>
                <Button onPress={()=> navigation.navigate('Cafe4')} title='GO TO CART' color={'#efb034'}></Button>
            </View>
            
          
        </View>

    )
}

const styles= StyleSheet.create({
    
    
})


export default Cafe3;