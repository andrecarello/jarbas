<template>
  <section class="_c:stories">
    <nav class="_c:stories-nav">
      <slot v-for="story in stories">
        <slot v-for="(data, index) in story">
          <a
            href="/stories/open"
            @click.prevent="openStories(data.id)"
            :key="index"
          >
            <load-image :source="data.avatar + '.jpg'" :alt="data.user" />
          </a>
        </slot>
      </slot>
      <div class="_c:stories-nav-spacer" />
    </nav>
    <section class="_c:stories">
      <div class="_c:stories-content">
        <div class="_c:stories-content-inner">
          <slot v-for="user in stories">
            <story
              ref="stories"
              v-for="(data, index) in user"
              :active="initial"
              :key="index"
              :slides="data.stories"
            />
          </slot>
        </div>

        <div class="_c:stories-actions">
          <button>PREV</button>
          <div>teste</div>
          <button>NEXT</button>
        </div>
      </div>
    </section>
  </section>
</template>

<script src="./index.js"></script>
<style lang="scss" src="./index.scss"></style>
