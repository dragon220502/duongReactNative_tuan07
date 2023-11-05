import {View,Button,Image,TextInput, Text, StyleSheet, TouchableOpacity} from 'react-native'




function Cafe4({navigation}){
    return(
        <View style = {styles.container}>
           <View style={{flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', paddingTop: 5, paddingBottom: 15}}>
                <TouchableOpacity onPress={()=>{navigation.navigate('Cafe2')}}>
                    <Image style={{width: 20, height: 20}} source={require('../assets/back.png')}></Image>
                </TouchableOpacity>
                
                <Text style={{fontSize: 30, fontWeight: 'bold'}}>Your orders</Text>
                <TouchableOpacity>
                    <Image style={{width: 30, height: 30}} source={require('../assets/look.png')}></Image>
                </TouchableOpacity>
            </View>

            <TouchableOpacity>
                <View style={{backgroundColor: '#00bdd6', marginHorizontal: 30}}>
                    <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around'}}>
                        <Text style={{color:'#FFFFFF', fontWeight: 'bold', fontSize: 18}}>CAFE DELIVERY</Text>
                        <Text style={{color:'#FFFFFF', fontWeight: 'bold', fontSize: 20}}>$5</Text>
                    </View>
                
                    <View style={{paddingLeft: 78}}>
                    <Text style={{color:'#FFFFFF', fontWeight: 'bold', fontSize: 15}}>Order #18</Text>
                    </View>
                
                </View>
            </TouchableOpacity>
           
           <TouchableOpacity>
            <View style={{backgroundColor: '#8353e2',  marginHorizontal: 30}}>
                    <View style={{flexDirection: 'row' , alignItems: 'center',  justifyContent: 'space-around'}}>
                        <Text style={{color:'#FFFFFF', fontWeight: 'bold', fontSize: 18}}>CAFE</Text>
                        <Text style={{color:'#FFFFFF', fontWeight: 'bold', fontSize: 20}}>$25</Text>
                    </View>
                
                    <View style={{paddingLeft: 78}}>
                        <Text style={{color:'#FFFFFF', fontWeight: 'bold', fontSize: 15,  }}>Order #18</Text>
                    </View>
                
                </View>
           </TouchableOpacity>
            
            <View style={{borderRadius: 5, borderColor: '#C4C4C4', borderWidth: 1 , paddingTop: 15, paddingBottom: 10, alignItems: 'flex-start'}}>
                <Image style={{width: 80, height: 80}} source={require('../assets/cfmuoi.png')}></Image>
            </View>
            <View style={{borderRadius: 5, borderColor: '#C4C4C4', borderWidth: 1}}>
                <Image style={{width: 80, height: 80}} source={require('../assets/cfchon.png')}></Image>
            </View>
           
           <View style={{paddingTop: 20, marginHorizontal: 30}} >
                <Button onPress={()=> navigation.navigate('Cafe1', alert('Order Success')) } title='PAY NOW' color={'#efb034'}></Button>
           </View>
          
        </View>

    )
}

const styles= StyleSheet.create({
    
    
})


export default Cafe4;