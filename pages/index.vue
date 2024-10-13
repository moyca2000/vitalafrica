<template>
    <div class="bg-blancova">
        <div class="relative isolate pt-14" id="inicio">
            <div class="px-6 max-sm:py-10 sm:py-24 lg:flex lg:items-center lg:gap-x-10 lg:px-8 lg:py-40">
                <div class="lg:w-2/3 max-sm:px-5 lg:mx-0 max-lg:p-10 lg:p-20 lg:flex-auto">
                    <h1 class="mt-10 max-w-lg text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">Vital África
                    </h1>
                    <p class="mt-6 text-lg leading-8 text-gray-600">Con Vital África tienes una esperanza de vida</p>
                    <div class="mt-10 flex items-center gap-x-6">
                        <a href="https://wa.me/5586358879" target="_blank"
                            class="rounded-md bg-verdeva px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-verdeva focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-verdeva">Comprar</a>
                        <a href="#gotero" class="text-sm font-semibold leading-6 text-gray-900">Sobre el gotero<span
                                aria-hidden="true">→</span></a>
                    </div>
                </div>
                <div class="mt-16 lg:w-1/3 sm:mt-24 lg:mr-28 lg:mt-0 lg:flex-shrink-0 lg:flex-grow">
                    <img src="public/informacion.jpg" alt="" />
                </div>
            </div>
        </div>
        <div class="overflow-hidden bg-verdeva py-24 sm:py-32" id="gotero">
            <div class="mx-auto max-w-7xl px-6 lg:px-8">
                <div
                    class="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
                    <div class="lg:pr-8 lg:pt-4">
                        <div class="lg:max-w-lg p-10 bg-white rounded">
                            <p class="mt-2 text-3xl font-bold tracking-tight text-black sm:text-4xl">Nuestro Gotero</p>
                            <p class="mt-6 text-lg leading-8 text-black text-justify">Lechero africano o planta de vida
                                cuyo nombre científico es SYNADENIUM GRANTII HOOK ,las primeras investigaciones las
                                realizó el científico norteamericano Grant Hook hace 30 años descubriendo un compuesto
                                activo denominado PHORBOL cuyos ésteres tienen la capacidad de actuar en tumores con
                                neoplasia maligna impidiendo la proliferación de células cancerígenas y regenerando
                                tejidos por el cáncer. en Perú han seguido los estudios por más de 10 años informándose
                                sobre sus beneficios terapéuticos y comprobando su poder curativoen enfermedades como el
                                cáncer, diabetes, gangrena, lupus, entre otras</p>
                            <dl class="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                                <div v-for="feature in features" :key="feature.name" class="relative pl-9">
                                    <dt class="inline font-semibold text-gray-900">
                                        <component :is="feature.icon" class="absolute left-1 top-1 h-5 w-5 text-verdeva"
                                            aria-hidden="true" />
                                        {{ feature.name }}
                                    </dt>
                                    {{ ' ' }}
                                    <dd class="inline text-justify">{{ feature.description }}</dd>
                                </div>
                            </dl>
                        </div>
                    </div>
                    <img src="public/principal.png" alt="Product screenshot"
                        class="w-[25rem] max-w-none rounded-xl shadow-xl sm:w-[40rem] md:-ml-4 lg:-ml-0" width="2432"
                        height="1442" />
                </div>
            </div>
        </div>
        <carousel class="bg-blancova" :items-to-show="1" slideWidth="100" id="testimonios">
            <slide v-for="testimonio in testimonios" :key="testimonio">
                <section class="bg-white px-6 py-24 sm:py-32 lg:px-8 w-max">
                    <figure class="mx-auto max-w-2xl">
                        <p class="sr-only">5 de 5 estrellas</p>
                        <div class="flex gap-x-1 text-indigo-600">
                            <StarIcon class="h-5 w-5 flex-none" aria-hidden="true" />
                            <StarIcon class="h-5 w-5 flex-none" aria-hidden="true" />
                            <StarIcon class="h-5 w-5 flex-none" aria-hidden="true" />
                            <StarIcon class="h-5 w-5 flex-none" aria-hidden="true" />
                            <StarIcon class="h-5 w-5 flex-none" aria-hidden="true" />
                        </div>
                        <blockquote
                            class="mt-10 text-xl font-semibold leading-8 tracking-tight text-gray-900 sm:text-2xl sm:leading-9">
                            <p>“{{ testimonio.testimonio }}”</p>
                        </blockquote>
                        <figcaption class="mt-10 flex items-center gap-x-6">
                            <div class="text-sm leading-6">
                                <div class="font-semibold text-gray-900">{{ testimonio.nombre }}</div>
                                <div class="mt-0.5 text-gray-600">Diagnóstico: {{ testimonio.diagnostico }}</div>
                            </div>
                        </figcaption>
                    </figure>
                </section>
            </slide>
            <template #addons>
                <navigation />
                <pagination />
            </template>
        </carousel>
        <div class="bg-verdeva py-24 sm:py-32" id="nuestro-equipo">
            <div class="mx-auto max-w-7xl px-6 lg:px-8">
                <div class="mx-auto max-w-2xl sm:text-center">
                    <h2 class="text-3xl font-bold tracking-tight text-white sm:text-4xl">Nuestro Equipo</h2>
                </div>
                <ul role="list"
                    class="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-6 gap-y-20 sm:grid-cols-2 lg:max-w-4xl lg:gap-x-8 xl:max-w-none">
                    <li v-for="person in people" :key="person.name"
                        class="flex flex-col gap-6 p-10 rounded xl:flex-row bg-blancova">
                        <img class="aspect-[4/5] w-52 flex-none rounded-2xl object-cover" :src="person.imageUrl"
                            alt="" />
                        <div class="flex-auto">
                            <h3 class="text-lg font-semibold leading-8 tracking-tight text-gray-900">{{ person.name }}
                            </h3>
                            <p class="text-base leading-7 text-gray-600">{{ person.role }}</p>
                            <p class="mt-6 text-base leading-7 text-gray-600">{{ person.bio }}</p>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
        <div class="bg-blancova" id="preguntas">
            <div class="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8 lg:py-40">
                <div class="mx-auto max-w-4xl divide-y divide-gray-900/10">
                    <h2 class="text-2xl font-bold leading-10 tracking-tight text-gray-900">Preguntas frecuentes
                    </h2>
                    <dl class="mt-10 space-y-6 divide-y divide-gray-900/10">
                        <Disclosure as="div" v-for="faq in faqs" :key="faq.question" class="pt-6" v-slot="{ open }">
                            <dt>
                                <DisclosureButton
                                    class="flex w-full items-start justify-between text-left text-gray-900">
                                    <span class="text-base font-semibold leading-7">{{ faq.question }}</span>
                                    <span class="ml-6 flex h-7 items-center">
                                        <PlusIcon v-if="!open" class="h-6 w-6" aria-hidden="true" />
                                        <MinusIcon v-else class="h-6 w-6" aria-hidden="true" />
                                    </span>
                                </DisclosureButton>
                            </dt>
                            <DisclosurePanel as="dd" class="mt-2 pr-12">
                                <p class="text-base leading-7 text-gray-600">{{ faq.answer }}</p>
                            </DisclosurePanel>
                        </Disclosure>
                    </dl>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import { Dialog, DialogPanel } from '@headlessui/vue'
import { Bars3Icon, XMarkIcon } from '@heroicons/vue/24/outline'
import { ChevronRightIcon } from '@heroicons/vue/20/solid'
import { InformationCircleIcon } from '@heroicons/vue/20/solid'
// If you are using PurgeCSS, make sure to whitelist the carousel CSS classes
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue'
import { MinusIcon, PlusIcon } from '@heroicons/vue/24/solid'

const faqs = [
  {
    question: "¿Qué es el lechero africano y por qué es tan valorado en la medicina tradicional?",
    answer:"El lechero africano (Euphorbia tirucalli) es una planta utilizada durante siglos en la medicina tradicional africana debido a sus potentes propiedades medicinales. Es valorado por sus efectos antiinflamatorios, su capacidad para fortalecer el sistema inmunológico y su versatilidad en el tratamiento de diversas dolencias.",
  },
  {
    question: "¿Cuáles son los principales beneficios del lechero africano para la salud?",
    answer:"El lechero africano es conocido por ayudar a reducir la inflamación, mejorar el sistema inmunológico y promover una mejor digestión. También se utiliza para aliviar dolores articulares, mejorar la circulación y apoyar el bienestar general del cuerpo.",
  },
  {
    question: "¿Cómo puede el lechero africano fortalecer el sistema inmunológico?",
    answer:"El lechero africano contiene compuestos bioactivos que estimulan las defensas naturales del cuerpo, ayudando a combatir infecciones y enfermedades. Consumido regularmente, puede ayudar a mantener un sistema inmunológico más fuerte y resistente. ",
  },
  {
    question: "¿Es seguro utilizar el lechero africano como remedio natural?",
    answer:"Sí, el lechero africano es seguro cuando se utiliza correctamente y bajo la orientación de un especialista en plantas medicinales. Se ha usado durante generaciones de forma eficaz y es una alternativa natural a ciertos tratamientos convencionales.",
  },
  {
    question: "Cómo se puede consumir el lechero africano para obtener sus beneficios?",
    answer:"El lechero africano puede consumirse en forma de té, extractos o cremas tópicas. Dependiendo de la dolencia, se recomienda consultar a un experto en plantas medicinales para conocer la dosis adecuada y aprovechar al máximo sus beneficios.",
  },
]
const testimonios = [
    {
        nombre: "JUAN BERNARDO",
        diagnostico: "Diabetes mellitus tipo 2.",
        testimonio: "Desde hace 10 años tengo diabetes mellitus tipo 2, antes del tratamiento mis niveles de glucosa eran de 400 mg/dl, con pie diabético e hipertenso. Decidí adquirir el tratamiento y la asesoría de la Dra. fue muy clara y concisa, me mandó una dieta específica, mis indicaciones y ficha técnica. Con un mes de tratamiento mi presión arterial se reguló, mi pie diabético sanó muy rápido y mis niveles de glucosa bajaron a 140 mg/dl. Ahora puede decir que gracias a la Dra. y a Lechero Africano o Planta de la Vida estoy libre de diabetes."
    },
    {
        nombre: "MARIA ISABEL",
        diagnostico: "Cáncer de colon  con metástasis en hígado.",
        testimonio: "Yo conocí la planta de la vida una noche cuando termine de  hacer mi rosario  mi estado de ánimo andaba muy mal por los diagnósticos que me habían dado y yo dije lo que dios me mande lloraba y lloraba y agarre mi cel y me puse a investigar y de repente me apareció la vivencia de una señora que su hijita estaba mejorando con estas gotas y me puse a investigar y encontré que la madre Teresa de Calcuta curaba a muchos enfermos con esta planta  y  en ese momento le comenté a mi  esposo y me dijo mañana te comunicas y yo dije arriesgare 1700 por qué yo quería estar bien  y yo sabía que el señor me lo había puesto en mi camino  y a un año de mis quimios me siento bastante bien ahora mi médico me recomienda quitar donde tuve el primer tumor y si dios quiere a fin de mes entro a cirugía.  Disminuyó mucho los malestares de la quimio y las llagas en la boca, le doy gracias a Dios por poner en mi camino a la Dra."
    },
    {
        nombre: "CIPRIANO",
        diagnostico: "Pancreatitis",
        testimonio: "Mi nombre es Cipriano  Dionicio  Flores. Debido a una enfermedad  tan  terrible que  tuve  llamada pancreatitis  fui  internado en una  clínica por 4 dias y programado para una cirugía,  ya que  mi salud estaba bastante  mal. Me quedé muy flaco, sin fuerzas para caminar,  sin fuerzas  para  levantarme de la cama, y no tenía fuerzas para hablar. Salí  de la clínica  pero yo seguía  mal; me recetaron medicamentos  pero como ya había  gastado mucho  dinero  ya no pude comprarlo y a pesar de todo  el tratamiento que  me dieron en la clínica  mi salud empeoraba  cada día más;  baje mucho de peso al grado que  me quedé  esquelético. Pero  gracias  a Dios  que me dio la oportunidad  de conocer un producto 100% natural que  se llama  Lechero Africano o Planta de la vida, me lo recomendaron y  lo empecé  a tomar, y a partir  de medio año  empecé  a sentirme un poco mejor y me lo seguí  tomando y en año y medio recupere recuperé  mi salud. Gracias  a Dios  ahora estoy bien. Por lo cual ahora recomiendo el gotero  de Lechero Africano o Planta de la vida una alternativa para su salud."
    },
    {
        nombre: "GUDELIA REYES",
        diagnostico: "Artritis e hipertensión",
        testimonio: "Le compré el tratamiento a mi mamá porque ella sufría mucho con los dolores de sus articulaciones, a pesar de que la tenemos controlada los medicamentos que le enviaba el doctor la no le hacía y decidimos probar con este tratamiento natural, en tres semanas mi mamá vio cambios muy notorios porque sus articulaciones ya no le dolían como antes y comenzó a tener un poco mas de  movilidad, ahora junto con el tratamiento del médico y lechero africano o planta de la vida mi mamá se siente mejor, pues unos de los compuestos principales del tratamiento es ser antiinflamatorio y ha cumplido muy bien su función así como le ayudó a mi mamá le puede ayudar a muchas más personas que sufren de artritis."
    },
]
const features = [
    {
        name: 'Phorbol: ',
        description:
            'Compuesto activo que tiene función inhibitoria en el crecimiento y proliferación de celulas cancerígenas.',
        icon: InformationCircleIcon,
    },
    {
        name: 'Bufanoides: ',
        description: 'Actúa como preventivo del paro cardíaco, es anti-bacteriano, antitumores y preventivo contra el cáncer',
        icon: InformationCircleIcon,
    },
    {
        name: 'Ethanolic: ',
        description: 'Tiene acción cardiovascular y ayuda a regular la presión arterial.',
        icon: InformationCircleIcon,
    },
    {
        name: 'Aminoácidos esenciales: ',
        description: 'Leucina, isoleucina, valina, fenilalanina, metionina, treonina, lisina, triptófano. Actúa como potenciador de tejidos',
        icon: InformationCircleIcon,
    }
]
const people = [
    {
        name: 'María Fernanda Hernández Meza',
        role: 'Doctora',
        imageUrl:
            'https://images.unsplash.com/photo-1527613426441-4da17471b66d?q=80&w=2652&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        bio: 'Con una profunda pasión por el bienestar integral, la Dra. María Fernanda Hernández Meza es especialista en medicina alternativa, enfocada en tratamientos naturales y holísticos que buscan equilibrar cuerpo, mente y espíritu. Con más de 5 años de experiencia, combina su formación médica tradicional con terapias alternativas como la homeopatía, acupuntura y fitoterapia, ofreciendo soluciones personalizadas para mejorar la salud de sus pacientes de manera natural y efectiva.',
    },
    {
        name: 'Alejandro Hernández Meza',
        role: 'Bioloiga',
        imageUrl:
            'https://images.unsplash.com/photo-1578307985189-6f84ae0cf2e0?q=80&w=2626&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        bio: 'Alejandro Hernández Meza es bióloga especializada en el estudio de la biodiversidad y la conservación del medio ambiente. Con un fuerte compromiso hacia la investigación científica, ha dedicado su carrera a la protección de ecosistemas y especies en peligro de extinción. Su enfoque en el trabajo de campo y su experiencia en proyectos de conservación la convierten en una pieza clave para el equipo, aportando un enfoque científico riguroso a todos nuestros proyectos.',
    },
    {
        name: 'Juanita',
        role: 'Nose',
        imageUrl:
            'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
        bio: 'Quia illum aut in beatae. Possimus dolores aliquid accusantium aut in ut non assumenda. Enim iusto molestias aut deleniti eos aliquid magnam molestiae. At et non possimus ab. Magni labore molestiae nulla qui.',
    }
]
</script>