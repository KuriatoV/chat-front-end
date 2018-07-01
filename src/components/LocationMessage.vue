<template>
 <li class="message">
        <div class="message__title"> <h4>{{message.from}}</h4> <span>{{message.formattedTime}}</span></div>
       <div class="message__body"> <p><a target="_blank" v-bind:href="message.url">My current location</a></p></div>
</li>
</template>

<script>

export default {
  name: 'LocationMessage',
  props:{message:Object}
}
</script>


