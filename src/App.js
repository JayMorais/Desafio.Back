import React,{Component} from 'react';
import{Text, View, Flatlist} from 'react-native';
import api from './src/services/api';
import Proposicoes from './src/index';

class App extends Component{
  constructor(props){
    super(props);
//estado é o lugar onde vamos armazenar os dados para exibir na tela
    this.state={
      proposicoes :[]
    }
}
//metodo executável quando inicialicazo
componentDidMount(){
const response = api.get('swagger/api#api')
//setState- mda estado
this.setState({
	proposicoes:response.data
})
render(){
  return(
    <View style={styles.container}>
	  <Flatlist
	  data={this.state.proposicoes}
	  keyExtractor={item=>item.id.toString()}
	  renderItem={(item)=><Proposicoes data={item}/>}
    />
    </View> 
  );  
}

}

}