<template>
  <div class="footer">
    <p>Project designed by: Eduard Benedic</p>
  </div>
</template>
<style scoped lang="less">
div {
  padding: 30px 25px;
  @media @mq-550 {
    padding: 20px 25px;
  }
}

p {
  color: rgb(224, 224, 224);
  font-size: 1.2rem;
  @media @mq-550 {
    font-size: 1rem;
  }
}
@mq-550: ~"only screen and (max-width: 550px)";
</style>