export default {
   Query:{
    async hello(parents,args, context,info){
        return `hello ${args.name}`
    }
   }
}