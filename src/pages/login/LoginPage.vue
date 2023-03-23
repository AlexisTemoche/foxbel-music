<template>
  <q-page class="flex flex-center column">
    <div v-if="!isHaveCode">
      <div class="row q-mx-md q-my-sm">
        <span
          >Para poder utilizar el buscador de música necesita obtener un
          token</span
        >
      </div>
      <div class="row q-my-sm justify-center">
        <button class="btn btn-primary" @click="obtenerCode()">
          Obtener Codigo
        </button>
      </div>
      <div class="row q-mx-md q-my-sm">
        <span>
          Este boton redirecciona a la plataforma deezer, si no cuenta con las
          credenciales solicite el token al creador.
        </span>
      </div>
    </div>
    <div v-else>
      <div class="row q-my-sm">
        <span>
          El siguiente boton le abrirá una pestaña con el accesToken
        </span>
      </div>
      <div class="row q-my-sm justify-center">
        <button class="btn btn-primary" @click="obtenerToken()">
          Obtener Token
        </button>
      </div>
      <div class="row q-my-sm">
        <div class="q-pa-md">
          <div class="q-gutter-md">
            <q-input
              v-model="text"
              label="Ingrese el accestoken"
              dense
            ></q-input>
          </div>
        </div>
      </div>
      <div class="row q-my-sm justify-center">
        <button class="btn btn-primary" @click="acceso(text)">Acceder</button>
      </div>
    </div>
  </q-page>
</template>

<script>
import { defineComponent, computed } from "vue";
import { useRouter } from "vue-router";
import { useLoggedStatus } from "../../stores/loggedStatus";

export default defineComponent({
  name: "LoginPage",

  setup() {
    const router = useRouter();

    const APP_ID = "591144";
    const REDIRECT_URI = "http://localhost:9000";
    const APP_SECRET = "4b7819f423f2f866e15013ef855d8208";

    const loggedStore = useLoggedStatus();

    const computedValue = computed(() => {
      return router.currentRoute.value.query.hasOwnProperty("code");
    });

    return {
      isHaveCode: computedValue,
      obtenerCode() {
        window.open(
          `https://connect.deezer.com/oauth/auth.php?app_id=${APP_ID}&redirect_uri=${REDIRECT_URI}&perms=basic_access`,
          "_blank"
        );
      },
      obtenerToken() {
        window.open(
          `https://connect.deezer.com/oauth/access_token.php?app_id=${APP_ID}&secret=${APP_SECRET}&code=${router.currentRoute.value.query.code}`,
          "_blank"
        );
      },
      acceso(token) {
        loggedStore.login(token);
        router.push({ name: "recientes" });
      },
    };
  },
});
</script>
