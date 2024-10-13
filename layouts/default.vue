<template>
    <div>
        <header class="fixed inset-x-0 top-0 z-50 w-full bg-blancova">
            <nav class="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
                <div class="flex lg:flex-1">
                    <a href="#" class="-m-1.5 p-1.5">
                        <span class="sr-only">Vital África</span>
                        <img class="max-sm:w-28 md:w-36 rounded" src="./public/logoprincipal.png" alt="" />
                    </a>
                </div>
                <div class="flex lg:hidden">
                    <button type="button"
                        class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                        @click="mobileMenuOpen = true">
                        <span class="sr-only">Abrir menu</span>
                        <Bars3Icon class="h-6 w-6" aria-hidden="true" />
                    </button>
                </div>
                <div class="hidden lg:flex lg:gap-x-12 text-black">
                    <a v-for="item in navigation" :key="item.name" :href="item.href"
                        class="text-sm font-semibold leading-6 text-gray-900">{{ item.name }}</a>
                </div>
                <!-- <div class="hidden lg:flex lg:flex-1 lg:justify-end">
                    <a href="#" class="text-sm font-semibold leading-6 text-gray-900">Iniciar Sesión <span
                            aria-hidden="true">&rarr;</span></a>
                </div> -->
            </nav>
            <Dialog class="lg:hidden" @close="mobileMenuOpen = false" :open="mobileMenuOpen">
                <div class="fixed inset-0 z-50" />
                <DialogPanel
                    class="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-blancova px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                    <div class="flex items-center justify-between">
                        <a href="#" class="-m-1.5 p-1.5">
                            <span class="sr-only">Vital África</span>
                            <img class="h-8 w-auto" src="./public/logoprincipal.png" alt="" />
                        </a>
                        <button type="button" class="-m-2.5 rounded-md p-2.5 text-gray-700"
                            @click="mobileMenuOpen = false">
                            <span class="sr-only">Cerrar menu</span>
                            <XMarkIcon class="h-6 w-6" aria-hidden="true" />
                        </button>
                    </div>
                    <div class="mt-6 flow-root">
                        <div class="-my-6 divide-y divide-gray-500/10">
                            <div class="space-y-2 py-6">
                                <a v-for="item in navigation" :key="item.name" :href="item.href"
                                    @click="mobileMenuOpen = false"
                                    class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">{{
                                        item.name }}</a>
                            </div>
                            <!-- <div class="py-6">
                                <a href="#"
                                    class="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Iniciar Sesión</a>
                            </div> -->
                        </div>
                    </div>
                </DialogPanel>
            </Dialog>
        </header>
        <slot />
        <footer class="bg-verdeva">
            <div class="mx-auto max-w-7xl overflow-hidden px-6 py-20 sm:py-24 lg:px-8">
                <nav class="-mb-6 columns-2 sm:flex sm:justify-center sm:space-x-12" aria-label="Footer">
                    <div v-for="item in footernv.main" :key="item.name" class="pb-6">
                        <a :href="item.href" class="text-sm leading-6 text-white hover:text-gray-300">{{ item.name
                            }}</a>
                    </div>
                </nav>
                <div class="mt-10 flex justify-center space-x-10">
                    <a v-for="item in footernv.social" :key="item.name" :href="item.href"
                        class="text-white hover:text-gray-300">
                        <span class="sr-only">{{ item.name }}</span>
                        <component :is="item.icon" class="h-6 w-6" aria-hidden="true" />
                    </a>
                </div>
                <p class="mt-10 text-center text-xs leading-5 text-white">&copy; {{ yearnow }} Vital África. todos
                    los derechos reservados.</p>
            </div>
        </footer>
    </div>
</template>
<script setup>
import { ref } from 'vue'
import { Dialog, DialogPanel } from '@headlessui/vue'
import { Bars3Icon, XMarkIcon } from '@heroicons/vue/24/outline'
import { ChevronRightIcon } from '@heroicons/vue/20/solid'

import { defineComponent, h } from 'vue'

const yearnow = new Date().getFullYear()

const footernv = {
    main: [
        { name: 'Inicio', href: '#inicio' },
        { name: 'Historia', href: '#' },
        { name: 'Testimonios', href: '#testimonios' },
        { name: 'Sobre el gotero', href: '#gotero' },
        { name: 'Equipo', href: '#nuestro-equipo' },
        { name: 'Preguntas Frecuentes', href: '#preguntas' },
    ],
    social: [
        {
            name: 'Facebook',
            href: 'https://www.facebook.com/people/Vital-Africa/100078311740232/',
            icon: defineComponent({
                render: () =>
                    h('svg', { fill: 'currentColor', viewBox: '0 0 24 24' }, [
                        h('path', {
                            'fill-rule': 'evenodd',
                            d: 'M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z',
                            'clip-rule': 'evenodd',
                        }),
                    ]),
            }),
        },
        {
            name: 'Instagram',
            href: 'https://www.instagram.com/vitalafricamexico/',
            icon: defineComponent({
                render: () =>
                    h('svg', { fill: 'currentColor', viewBox: '0 0 24 24' }, [
                        h('path', {
                            'fill-rule': 'evenodd',
                            d: 'M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z',
                            'clip-rule': 'evenodd',
                        }),
                    ]),
            }),
        },
        {
            name: 'WhatsApp',
            href: 'https://wa.me/5586358879',
            icon: defineComponent({
                render: () =>
                    h('svg', { fill: 'currentColor', viewBox: '0 0 32 32', xmlns: 'http://www.w3.org/2000/svg' }, [
                        h('path', {
                            d: 'M16 0C7.164 0 0 7.164 0 16c0 2.828.735 5.487 2.024 7.81L.125 31.25l7.61-1.96A15.951 15.951 0 0 0 16 32c8.836 0 16-7.164 16-16S24.836 0 16 0zm8.867 23.371c-.372.93-2.19 1.795-3.03 1.885-.83.09-1.49.465-4.979-1.06-4.192-1.736-6.863-6.132-7.07-6.414-.206-.282-1.68-2.237-1.68-4.265 0-2.029 1.056-3.03 1.428-3.44.372-.413.808-.516 1.085-.516s.543-.007.782.014c.241.021.586-.095.912.695.372.93 1.265 3.148 1.378 3.376.11.228.185.507.037.789-.14.282-.208.507-.41.775-.206.268-.432.596-.621.799-.206.215-.423.453-.185.87.241.413 1.072 1.762 2.297 2.87 1.577 1.413 2.906 1.85 3.33 2.064.423.215.671.19.923-.115.248-.3 1.064-1.237 1.35-1.66.282-.423.562-.352.93-.215.372.14 2.38 1.123 2.785 1.332.41.206.682.312.782.485.11.169.11.975-.262 1.905z',
                        }),
                    ]),
            }),
        },
    ],
}

const navigation = [
    { name: 'Inicio', href: '#inicio' },
    { name: 'Historia', href: '#' },
    { name: 'Testimonios', href: '#testimonios' },
    { name: 'Sobre el gotero', href: '#gotero' },
    { name: 'Equipo', href: '#nuestro-equipo' },
    { name: 'Preguntas Frecuentes', href: '#preguntas' },
]

const mobileMenuOpen = ref(false)
</script>