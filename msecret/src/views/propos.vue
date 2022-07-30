<template>
  <div>
    <div class="head">
      <div class="box" style="background: black">
        <h2>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem dolore
          ipsam velit mollitia vitae, delectus nemo illum officia ipsa, nostrum
          perferendis et alias. Ab nam, doloremque et assumenda ipsum at!
        </h2>
        <p>
          <vs-button> contact </vs-button>
        </p>
      </div>
      <div class="box" style="background-color: black">
        <img
          src="../assets/Av Infinity War (13).jpg"
          width="600"
          height="350"
          alt=""
          srcset=""
          style="border-radius: 60%; width: 90%; height: 90%"
        />
      </div>
    </div>

    <div class="container">
      <!-- PREMIER BLOCK -->
      <div class="index">
        <div class="box2" style="background-color: bisque">
          <p style="margin: 5px">
            <img
              src="../assets/Assassin.jpg"
              alt="Image"
              style="
                width: 350px;
                height: 290px;
                margin-right: 7px;
                float: left;
              "
            />
            Lorem ipsum dolor sit amet, consectetur adips nisl est, ultrices m
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
            saepe sitzz praesentium maxime ut accusantium aliquid quidem eius
            excepturi quae soluta, laudantium at dolor eveniet unde minima velit
            repellat sequi. ut lit.
          </p>
        </div>

        <div class="box2" style="background-color: bisque">
          <p style="margin: 5px; font-size: medium">
            <img
              src="../assets/Av Ultron (11).jpg"
              alt="Image"
              style="
                width: 350px;
                height: 290px;
                margin-right: 7px;
                float: left;
              "
            />
            Lorem ipsum dolor sit amet, consectetur adips nisl est, ultrices m
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
            asperiores sapiente a voluptatem facere. Asperiores quis temporibus
            cum animi! Aspernatur sequi molestiae explicabo asperiores saepe
            vitae, praesentium porro ipsam eaque? ut lit.
          </p>
        </div>
        <!-- FIN PREMIER BLOCK -->

        <!-- DEUXIEME BLOCK -->
        <ul >
          <li class="bloc2">
            <img class="img" src="../assets/Av Ultron (3).jpg" alt="Image" />
          </li>
          <li class="bloc2">
            <img class="img" src="../assets/Av Ultron (5).jpg" alt="Image" />
          </li>
          <li class="bloc2">
            <img class="img" src="../assets/Av Ultron (5).jpg" alt="Image" />
          </li>
          <li class="bloc2">
            <img class="img" src="../assets/Av Ultron (7).jpg" alt="Image" />
          </li>
        </ul>
        <!-- FIN DEUXIEME BLOCK -->

        <!-- TROISIEME BLOCK -->
        <div class="bloc3">
          <div class="card">
            <img src="../assets/Jack Sparrow (15).jpg" alt="Avatar" />
            <div class="contain">
              <h4><b>Lorem</b></h4>
              <p>Lorem ipsum dollor</p>
            </div>
          </div>
        </div>

        <div class="bloc3">
          <div class="card">
            <img src="../assets/Jack Sparrow (13).jpg" alt="Avatar" />
            <div class="contain">
              <h4><b>Lorem</b></h4>
              <p>Lorem ipsum dollor</p>
            </div>
          </div>
        </div>
        <!-- FIN TROISIEME BLOCK -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "proposView",
};
</script>

<style>
.index {
  position: absolute;
  background: white;
  height: 1080px;
  width: 97%;
  left: 50px;
  top: 445px;
  box-shadow: 1px 10px 15px 1px;
  border-radius: 10px;
}

* {
  box-sizing: border-box;
}

.box {
  float: left;
  width: 50%;
  height: 400px;
}

.box h2 {
  padding: 30px;
  color: white;
  font-size: 25px;
  font-family: cursive;
  font-style: italic;
}

.head::after {
  content: "";
  clear: both;
  display: table;
}

.container {
  background: bisque;
  height: 1080px;
}

.box2 {
  float: left;
  width: 48%;
  margin: 15px;
  height: 300px;
  margin-bottom: 80px;
}

.bloc2 {
  float: left;
  margin: 10px;
  height: 200px;
  list-style: none;
  margin-bottom: 80px;
}

.img {
  width: 100%;
  height: 200px;
  margin-right: 1px;
  float: left;
}

.bloc3 {
  float: left;
  width: 25%;
  height: 300px;
  margin-left: 50px;
}

.card img {
  width: 100%;
  height: 250px;
}

.contain {
  padding: 2px 16px;
  background: bisque;
}
</style>