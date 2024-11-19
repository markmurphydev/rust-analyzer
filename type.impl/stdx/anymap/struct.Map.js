(function() {
    var type_impls = Object.fromEntries([["stdx",[["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Debug-for-Map%3CA%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/stdx/anymap.rs.html#92\">source</a><a href=\"#impl-Debug-for-Map%3CA%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;A: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.82.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> + ?<a class=\"trait\" href=\"https://doc.rust-lang.org/1.82.0/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a> + <a class=\"trait\" href=\"stdx/anymap/trait.Downcast.html\" title=\"trait stdx::anymap::Downcast\">Downcast</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.82.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"struct\" href=\"stdx/anymap/struct.Map.html\" title=\"struct stdx::anymap::Map\">Map</a>&lt;A&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.fmt\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/stdx/anymap.rs.html#92\">source</a><a href=\"#method.fmt\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.82.0/core/fmt/trait.Debug.html#tymethod.fmt\" class=\"fn\">fmt</a>(&amp;self, f: &amp;mut <a class=\"struct\" href=\"https://doc.rust-lang.org/1.82.0/core/fmt/struct.Formatter.html\" title=\"struct core::fmt::Formatter\">Formatter</a>&lt;'_&gt;) -&gt; <a class=\"type\" href=\"https://doc.rust-lang.org/1.82.0/core/fmt/type.Result.html\" title=\"type core::fmt::Result\">Result</a></h4></section></summary><div class='docblock'>Formats the value using the given formatter. <a href=\"https://doc.rust-lang.org/1.82.0/core/fmt/trait.Debug.html#tymethod.fmt\">Read more</a></div></details></div></details>","Debug","stdx::anymap::AnyMap"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Default-for-Map%3CA%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/stdx/anymap.rs.html#103-108\">source</a><a href=\"#impl-Default-for-Map%3CA%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;A: ?<a class=\"trait\" href=\"https://doc.rust-lang.org/1.82.0/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a> + <a class=\"trait\" href=\"stdx/anymap/trait.Downcast.html\" title=\"trait stdx::anymap::Downcast\">Downcast</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.82.0/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"stdx/anymap/struct.Map.html\" title=\"struct stdx::anymap::Map\">Map</a>&lt;A&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.default\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/stdx/anymap.rs.html#105-107\">source</a><a href=\"#method.default\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.82.0/core/default/trait.Default.html#tymethod.default\" class=\"fn\">default</a>() -&gt; <a class=\"struct\" href=\"stdx/anymap/struct.Map.html\" title=\"struct stdx::anymap::Map\">Map</a>&lt;A&gt;</h4></section></summary><div class='docblock'>Returns the “default value” for a type. <a href=\"https://doc.rust-lang.org/1.82.0/core/default/trait.Default.html#tymethod.default\">Read more</a></div></details></div></details>","Default","stdx::anymap::AnyMap"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Map%3CA%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/stdx/anymap.rs.html#110-136\">source</a><a href=\"#impl-Map%3CA%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;A: ?<a class=\"trait\" href=\"https://doc.rust-lang.org/1.82.0/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a> + <a class=\"trait\" href=\"stdx/anymap/trait.Downcast.html\" title=\"trait stdx::anymap::Downcast\">Downcast</a>&gt; <a class=\"struct\" href=\"stdx/anymap/struct.Map.html\" title=\"struct stdx::anymap::Map\">Map</a>&lt;A&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.new\" class=\"method\"><a class=\"src rightside\" href=\"src/stdx/anymap.rs.html#113-115\">source</a><h4 class=\"code-header\">pub fn <a href=\"stdx/anymap/struct.Map.html#tymethod.new\" class=\"fn\">new</a>() -&gt; <a class=\"struct\" href=\"stdx/anymap/struct.Map.html\" title=\"struct stdx::anymap::Map\">Map</a>&lt;A&gt;</h4></section></summary><div class=\"docblock\"><p>Create an empty collection.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.get\" class=\"method\"><a class=\"src rightside\" href=\"src/stdx/anymap.rs.html#120-122\">source</a><h4 class=\"code-header\">pub fn <a href=\"stdx/anymap/struct.Map.html#tymethod.get\" class=\"fn\">get</a>&lt;T: <a class=\"trait\" href=\"stdx/anymap/trait.IntoBox.html\" title=\"trait stdx::anymap::IntoBox\">IntoBox</a>&lt;A&gt;&gt;(&amp;self) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.82.0/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.82.0/std/primitive.reference.html\">&amp;T</a>&gt;</h4></section></summary><div class=\"docblock\"><p>Returns a reference to the value stored in the collection for the type <code>T</code>,\nif it exists.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.entry\" class=\"method\"><a class=\"src rightside\" href=\"src/stdx/anymap.rs.html#126-135\">source</a><h4 class=\"code-header\">pub fn <a href=\"stdx/anymap/struct.Map.html#tymethod.entry\" class=\"fn\">entry</a>&lt;T: <a class=\"trait\" href=\"stdx/anymap/trait.IntoBox.html\" title=\"trait stdx::anymap::IntoBox\">IntoBox</a>&lt;A&gt;&gt;(&amp;mut self) -&gt; <a class=\"enum\" href=\"stdx/anymap/enum.Entry.html\" title=\"enum stdx::anymap::Entry\">Entry</a>&lt;'_, A, T&gt;</h4></section></summary><div class=\"docblock\"><p>Gets the entry for the given type in the collection for in-place manipulation</p>\n</div></details></div></details>",0,"stdx::anymap::AnyMap"]]]]);
    if (window.register_type_impls) {
        window.register_type_impls(type_impls);
    } else {
        window.pending_type_impls = type_impls;
    }
})()
//{"start":55,"fragment_lengths":[6335]}