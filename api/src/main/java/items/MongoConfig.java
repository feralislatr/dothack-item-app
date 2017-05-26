package items;
//new file, might delete
@Configuration
@EnableMongoRepositories("com.package.path.to.repository")
@Import(value = MongoAutoConfiguration.class)
public class MongoConfig extends AbstractMongoConfiguration {

    private final Logger log = LoggerFactory.getLogger(MongoConfig.class);

    @Autowired
    private Mongo mongo;

    @Autowired
    private MongoProperties mongoProperties;

    @Bean
    public ValidatingMongoEventListener validatingMongoEventListener() {
        return new ValidatingMongoEventListener(validator());
    }

    @Bean
    public LocalValidatorFactoryBean validator() {
        return new LocalValidatorFactoryBean();
    }

    @Override
    protected String getDatabaseName() {
        return mongoProperties.getDatabase();
    }

    @Override
    public Mongo mongo() throws Exception {
        return mongo;
    }
}