<script>
  import styled from "@/windboxes";

  let count = 0
  const increment = () => {
    count += 1
  }

  const ButtonClasses = styled(`
    rounded-md
    px-4
    py-3
    bg-[#f9f9f9]
    pointer
    border-2
    border-transport
    hover:bg-50
    hover:border-blue-300
    active:bg-blue-100
    active:border-blue-500
    duration-100
  `);
</script>

<button class={ButtonClasses} on:click={increment}>
  count is {count}
</button>
