<template>
   <li class="message">
           <div class="message__title"> <h4>{{message.from}}</h4> <span>{{message.formattedTime}}</span></div>
           <div class="message__body"><p>{{message.text}}</p></div>
  </li>
</template>

<script>

export default {
  name: 'Message',
  props:{message:Object}
}
</script>


