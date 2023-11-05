import { useEffect, useState } from 'react'
import {View,Button,Image,TextInput, Text, StyleSheet, TouchableOpacity, FlatList} from 'react-native'
import { ScrollView } from 'react-native-web'



// const data =[
//     {
//         id: '1',
//         pass: require('../assets/pass.png'),
//         name : 'To check email',
//         edit: require('../assets/edit.png'),
//     },
//     {
//         id: '2',
//         pass: require('../assets/pass.png'),
//         name : 'UI task web page',
//         edit: require('../assets/edit.png'),
//     },
//     {
//         id: '3',
//         pass: require('../assets/pass.png'),
//         name : 'Learn javascript basic',
//         edit: require('../assets/edit.png'),
//     },
//     {
//         id: '4',
//         pass: require('../assets/pass.png'),
//         name : 'Learn HTML advance',
//         edit: require('../assets/edit.png'),
//     },
//     {
//         id: '5',
//         pass: require('../assets/pass.png'),
//         name : 'Medical App UI',
//         edit: require('../assets/edit.png'),
//     },
//     {
//         id: '6',
//         pass: require('../assets/pass.png'),
//         name : 'Learn Java',
//         edit: require('../assets/edit.png'),
//     },
// ]


function Screen2({navigation}){

    // const [todos, setTodos] = useState({});

    // useEffect(() => {
    //     fetch('https://653f24b69e8bd3be29dffeee.mockapi.io/api/v1/todolist/1', {
    //     method: 'GET',
    //     headers: {'content-type':'application/json'},
    //     }).then(res => {
    //     if (res.ok) {
    //         return res.json();
    //     }
    //     // handle error
    //     }).then(todolist => {
    //         setTodos(todolist)
    //     }).catch(error => {
    //         console.log("Error ", error);
    //     })
    // }, [])
    var [data, setData] = useState([]);
    useEffect(() => {
        fetch('https://653f235e9e8bd3be29dffce8.mockapi.io/Screen1')
            .then((response) => response.json())
            .then((json) => setData(json))
    }, []);
   

    return(
        <View style = {styles.container}>
            {/* <View style={{flexDirection: 'row',  alignItems: 'center', paddingBottom: 30, paddingHorizontal: 20 , }}>
                <TouchableOpacity onPress={()=>{navigation.navigate('Screen1')}}>
                    <Image style={{width: 20, height: 20, }} source={require('../assets/back.png')}></Image>
                </TouchableOpacity>
          
                <TouchableOpacity  style={{paddingLeft: 130}} onPress={()=>{navigation.navigate('Screen3')}}>
                    <Image style={{width: 40, height: 40, }} source={require('../assets/user.png')}></Image>
                </TouchableOpacity>
                    
                
                <View style={{justifyContent: 'center'}}>
                    <Text style={{fontSize: 20, fontWeight: 'bold'}}>Hi Twinkle</Text>
                    <Text style={{fontSize: 15}}>Have agrate day a head</Text>
                </View>
              
            
            </View>
            <View style={{flexDirection: 'row', borderWidth: 1, borderColor: 'black', borderRadius: 3, marginHorizontal: 40}}>
                <Image style={{width: 40, height: 40, }} source={require('../assets/search.png')}></Image>
                <TextInput placeholder='Search' style={{color: '#C4C4C4', width: 300}}></TextInput>
            </View> */}
            
            
            {data.map((item) => (
                    <View style={{ marginTop: 60 }}>
                        <TouchableOpacity>
                            <Image
                                source={{ uri: item.image }}
                                style={{ width: 200, height: 62, borderRadius: 6, resizeMode: 'cover' }}
                            />
                        </TouchableOpacity>
                    </View>
                ))}

            {/* <View style={{marginTop: '50px', marginHorizontal: '15px'}}>
            {todos.todolist.length > 0 && todos.todolist.map((todo, idx) => {
                return <View key={todo.id} style={{flexDirection: 'row', alignItems: 'center', backgroundColor: 'rgba(0,0,0,0.1)', paddingHorizontal: '15px', paddingVertical: '10px', marginBottom: '15px', borderRadius: '10px'}}>
                  
                    <Text style={{fontSize: '20px', fontWeight: 'bold', marginLeft: '10px', marginRight: 'auto'}}>{todo}</Text>
                   
                </View>
            })}
            </View> */}
            
            <View style={{borderRadius: 30, marginHorizontal: 170, paddingTop: 50}}>
                <Button title='+' color={'#26c3d9'} style={{}}></Button>
            </View>
           
        </View>

    )
}

const styles= StyleSheet.create({
    
    
})


export default Screen2;