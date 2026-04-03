const VideoSection = () => (
  <section className="py-20 md:py-28 bg-surface">
    <div className="container">
      <div className="text-center max-w-2xl mx-auto mb-12">
        <span className="text-sm font-semibold uppercase tracking-widest text-secondary">Conocé la profesión</span>
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
          ¿Qué hace un profesional de Seguridad e Higiene?
        </h2>
        <p className="text-muted-foreground leading-relaxed">
          Descubrí en este video el rol clave que cumple el especialista en seguridad e higiene laboral dentro de las organizaciones.
        </p>
      </div>
      <div className="max-w-3xl mx-auto aspect-video rounded-xl overflow-hidden shadow-card">
        <iframe
          src="https://www.youtube.com/embed/QJhTQk_xIJQ"
          title="¿Qué hace un profesional de Seguridad e Higiene?"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          loading="lazy"
          className="w-full h-full border-0"
        />
      </div>
    </div>
  </section>
);

export default VideoSection;
