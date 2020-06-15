<template>
  <div class="info">
    <div class="info-top">
      <Title :title="titleCharacteristics"/>
      <Button
        v-show="!withoutDetails"
        @click="toggleDetails"
        :text="showDetails ? 'hide' : 'show'"
        :modifier="'small'"
      />
    </div>
    <div class="info-reduce" v-if="!showDetails">
      {{ product.name }}
    </div>
    <div class="info-details" v-else>
      {{ product }}
    </div>
  </div>
</template>
<script>

import Title        from '@/components/typography/Title'
import Button       from '@/components/common/Button'

// const FIELDS = {
//   processor: {
//     general: [
//       'vertical_segment', // Вертикальный сегмент
//       'product_collection', // Коллекция продукции
//       'processor_number', // Номер процессора
//       'lithography', // Литография 
//       'of_cores', // Количество ядер
//       'of_threads', // Количество потоков
//       'processor_base_frequency', // Базовая тактовая частота процессора
//       'max_frequency', // Максимальная тактовая частота
//       'cache', // Кэш-память
//       'bus_speed', // Частота системной шины
//       'tpd', // Расчетная мощность
//     ]
//   }
// }

export default {
  props: ['product', 'withoutDetails'],
  components: {
    Title,
    Button
  },
  data() {
    return {
      showDetails: false,
      titleCharacteristics: "Characteristics"
    }
  },
  methods: {
    toggleDetails() {this.showDetails = !this.showDetails}
  }
}
</script>

<style lang="sass" scoped>
  .info
    &-top
      display: flex
      align-items: center
      justify-content: space-between
      button
        width: 60px
</style>


// Supplemental Information
// Embedded Options Available No
// Memory Specifications
// Max Memory Size (dependent on memory type) 128 GB
// Memory Types DDR4-2666
// Max # of Memory Channels 2
// Max Memory Bandwidth 41.6 GB/s
// ECC Memory Supported ‡ No
// Processor Graphics ‡ Intel® UHD Graphics 630
// Graphics Base Frequency 350 MHz
// Graphics Max Dynamic Frequency 1.15 GHz
// Graphics Video Max Memory 64 GB
// 4K Support Yes, at 60Hz
// Max Resolution (HDMI 1.4)‡ 4096x2160@30Hz
// Max Resolution (DP)‡ 4096x2304@60Hz
// Max Resolution (eDP - Integrated Flat Panel)‡ 4096x2304@60Hz
// DirectX* Support 12
// OpenGL* Support 4.5
// Intel® Quick Sync Video Yes
// Intel® InTru™ 3D Technology Yes
// Intel® Clear Video HD Technology Yes
// Intel® Clear Video Technology Yes
// # of Displays Supported ‡3
// Device ID0x9BC8
// Expansion Options
// Scalability1S Only
// PCI Express Revision 3.0
// PCI Express Configurations ‡ Up to 1x16, 2x8, 1x8+2x4
// Max # of PCI Express Lanes 16
// Package Specifications
// Sockets Supported FCLGA1200
// Max CPU Configuration1
// Thermal Solution Specification PCG 2015C
// TJUNCTION 100°C
// Package Size37.5mm x 37.5mm
// Advanced Technologies
// Intel® Thermal Velocity Boost No
// Intel® Optane™ Memory Supported ‡ Yes
// Intel® Turbo Boost Max Technology 3.0 ‡ No
// Intel® Turbo Boost Technology ‡ 2.0
// Intel® vPro™ Platform Eligibility ‡ Yes
// Intel® Hyper-Threading Technology ‡ Yes
// Intel® Virtualization Technology (VT-x) ‡ Yes
// Intel® Virtualization Technology for Directed I/O (VT-d) ‡ Yes
// Intel® VT-x with Extended Page Tables (EPT) ‡ Yes
// Intel® Transactional Synchronization Extensions No
// Intel® 64 ‡ Yes
// Instruction Set 64-bit
// Instruction Set Extensions Intel® SSE4.1, Intel® SSE4.2, Intel® AVX2
// Idle States Yes
// Enhanced Intel SpeedStep® Technology Yes
// Thermal Monitoring Technologies Yes
// Intel® Identity Protection Technology ‡ Yes
// Intel® Stable Image Platform Program (SIPP) Yes
// Security & Reliability
// Intel® AES New Instructions Yes
// Secure Key Yes
// Intel® Software Guard Extensions (Intel® SGX) Yes with Intel® ME
// Intel® OS GuardYes
// Intel® Trusted Execution Technology ‡ Yes
// Execute Disable Bit ‡ Yes
// Intel® Boot Guard Yes