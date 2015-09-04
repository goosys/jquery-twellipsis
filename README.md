# jquery-twellipsis
ellipsis of anchor text via Twitter

## Try

http://jsbin.com/yaqimubaqo/edit?html,output

## How to use

```
  $('a').twellipsis();
  $('a').twellipsis({length:5});
  $('a').twellipsis({'tco-ellipsis':'---'});
  $('a').twellipsis({length_front:37});
```

## Preview

### HTML

```
<style> a .invisible { font-size: 0; line-height: 0; }<\style>
<a href="http://t.co/AAAAAAA">http://google.co.jp/AAABBBCCCDDD/EEE?FF=GGG</a>
<script>$('a').twellipsis();</script>
```

### Result

#### Display

```
google.co.jp/AAABBBCCCDDD/EEE?FF=GGG...
```

#### Source

```
<a href="http://t.co/AAAAAAA" data-expanted-url="http://google.co.jp/AAABBBCCCDDD/EEE?FF=GGG">
<span class="tco-ellipsis"></span>
<span class="invisible">http://</span>
<span class="js-display-url">google.co.jp/AAABBBCCCDDD/E</span>
<span class="invisible">EE?FF=GGG</span>
<span class="tco-ellipsis"><span class="invisible"> </span>...</span>
</a>
```

# License

MIT License
