import React from 'react';
import { connect } from 'react-redux'
import { LinearGradient } from 'expo';
import { StyleSheet, Text, View, ImageBackground, Image, TextInput, Dimensions, TouchableOpacity, KeyboardAvoidingView } from 'react-native';
import Icon from 'react-native-vector-icons/EvilIcons'



const { width: WIDTH } = Dimensions.get('window')

class App extends React.Component {
    constructor() {
        super()
        this.state = {
        }

    }

    static navigationOptions = {
        headerTitle: "Profile",
        headerTintColor: "#fff", 
        headerStyle: {
          backgroundColor: "#1a000d",
          color: "#ffff"
        }
      };

    ccomponentWillMount() {
        console.log('USER ',this.props.userInfo)

    }


    render() {
    
        return (
            <View style={styles.container}>  

                <LinearGradient
          colors={['rgba(0,0,0,0.8)', 'transparent']} style={styles.top}>
                    <Image
                        style={styles.profileImage}
                        source={{ uri: 'https://dcp.ufl.edu/dcp/uploads/2017/08/travis-kolbjornsen-300x300.png' }}
                    />
                    <Text style={{ fontWeight: '600', color: '#ffff' }}>User ID :  {this.props.userInfo.id}</Text>
                    <Text style={{ fontWeight: '300', color: '#ffff' }}>{this.props.userInfo.employee_name}</Text>
                </LinearGradient>

                <View style={styles.bottom}>
                    <View style={styles.bottomInner}>
                        <TouchableOpacity style={{ ...styles.bottomInnerItem, backgroundColor: '#cc0066' }}>
                            <Icon name='user' size={30} color='#fff' />
                            <Text style={{ fontWeight: '300', fontSize: 15, color: '#fff' }}>About</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.bottomInner}>
                        <TouchableOpacity style={styles.bottomInnerItem}>
                            <Icon name='chart' size={30} color='#666666' />
                            <Text style={{ fontWeight: '300', fontSize: 15, color: '#666666' }}>My Work</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.bottomInner}>
                        <TouchableOpacity style={styles.bottomInnerItem} onPress={() =>  this.props.navigation.navigate('EditProfile')}>
                            <Icon name='gear' size={30} color='#666666' />
                            <Text style={{ fontWeight: '300', fontSize: 15, color: '#666666' }}>Edit Profile</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.addressView}>
                        <Icon name='location' size={30} color='#666666' />
                        <Text style={{ fontWeight: '300', fontSize: 17, color: '#666666', left: 30, marginTop:10, position: 'absolute' }}>Address</Text>
                        <Text style={{ fontWeight: '300', fontSize: 15, color: '#666666', left: 30, marginTop:0}}>445 Mount Eden Road, Mount Eden, Auckland.</Text>
                    </View>
                </View>

                <View style={styles.bottomBar}>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.btnText}>Rate</Text>
                    </TouchableOpacity>
                    <Text style={{ ...styles.btnText, ...styles.button, borderColor: '#fff', color: '#999999' }}>25.99%</Text>
                    <TouchableOpacity style={styles.buttonFollow}>
                        <Text style={styles.btnText}>Follow</Text>
                    </TouchableOpacity>
                    <Text style={{ ...styles.btnText, ...styles.buttonFollow, marginTop: 55, borderColor: '#fff', color: '#999999' }}>150k</Text>
                </View>

            </View>
        );
    }
}

const mapStateToProps = (state) => {
    return { 
        userInfo : state.user
    }
  }
  
  const mapDispatchtoProps = (dispatch) => {
    return {  
    }
  }
  
  
  export default connect(mapStateToProps, mapDispatchtoProps)(App);

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }, 

    top: {
        height: '40%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#cc0066'

    },

    profileImage: {
        width: 140,
        height: 140,
        borderRadius: 100,
        borderWidth: 2,
        borderColor: '#fff',
        backgroundColor: '#930a1c',
    },


    bottomBar: {
        height: '15%',
        backgroundColor: '#ffff',
        padding: 10
    },

    button: {
        width: 100,
        fontSize: 18,
        height: 45,
        color: 'rgb(231, 228, 228)',
        borderRadius: 10,
        backgroundColor: '#fff',
        justifyContent: 'center',
        //marginTop: 20,
        borderColor: '#ff3377',
        borderWidth: 1,
    },

    buttonFollow: {
        width: 100,
        fontSize: 18,
        height: 45,
        color: 'rgb(231, 228, 228)',
        borderRadius: 10,
        backgroundColor: '#fff',
        justifyContent: 'center',
        borderColor: '#ff3377',
        borderWidth: 1,
        position: 'absolute',
        left: 250,
        marginTop: 10
    },

    btnText: {
        color: '#ff3377',
        fontSize: 18,
        fontWeight: '500',
        textAlign: 'center'
    },

    bottom: {
        height: '40%',
        backgroundColor: '#fff',
        flexDirection: 'row',
        flexWrap: 'wrap',
        padding: 10
    },
    bottomInner: {
        width: 100,
        height: 80,
        margin: 5
    },
    bottomInnerItem: {
        backgroundColor: '#fff',
        borderRadius: 5,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 2,

    },

    addressView: {
        marginTop: 20,
        height: 80,
        width: 340,
        borderBottomWidth: 1,
        borderTopWidth: 1,
        borderColor: '#b3b3b3',
        backgroundColor: '#fff', 
        paddingTop: 10
    }



});
